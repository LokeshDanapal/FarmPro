const alert = require("alert");
const User = require("../Models/queries");


PostQueries = async function (req, res) {
  console.log("posted successfully");
  const query=new User(req.body);
  try{
  await query.save();
  res.status(201).json(query);
  }catch(err)
  {
  console.log(err,"Error in posting query")
  }
};

ViweQueries = (req,res)=>{
  //console.log("Inside ViewQueries");
  User.find({}).exec().then((result)=>{res.send(result)}).catch((err)=>{console.error(err)
  res.status(500).send({status:"Error"});
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