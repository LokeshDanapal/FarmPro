const User = require("../Models/queries");
const alert = require("alert");
const multer = require("multer");
const fs = require('fs');
const path = require('path');

const Storage = multer.diskStorage({
  destination: "Uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("image");

PostQueries = async function (req, res) {
  console.log("posted successfully");
  upload(req, res, async (err) => {
    if (err) {
      console.log(err);
      res.json({ status: "error", message: err });
    } else {
      const {subject,question,description} = req.body;
      console.log(subject,question,description);
      const image1 = req.file;
      if(!image1){
        return res.status(400).json({ message: "No file uploaded" });
      }
      const image = {
        data : fs.readFileSync(image1.path),
        contentType : image1.mimetype,
      }
      await User.create(
        {
          username: subject,
          question,
          description,
          image
        },
        (err, item) => {
          if (err) {
            console.log(err);
            res.json({ status: "error", message: err });
          } else {
            res.json({ status: "ok", message: item });
            alert("Question Posted Successfully");
          }
        }
      );
    }
  });
};

ViweQueries = (req,res)=>{
  //console.log("Inside ViewQueries");
  User.find({},function(err,result){
    if (err) {
     console.log(err);
     res.send({status : err});
    }
    else{
      res.send(result);
    }
  })
}

UpdateAnswers = (req,res)=>{
  const id = req.body;
  const answer = req.body;
  console.log(id);
  console.log(answer);
  res.json({status : "ok", message:"done"});
}

module.exports = { PostQueries , ViweQueries ,UpdateAnswers};
