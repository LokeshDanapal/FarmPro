const alert = require("alert")
const queryModel = require("../Models/queries");
const answerModel = require("../Models/Answers");
const validator = require("node-input-validator");

addAnswer = async (req, res) => {
  let question = req.body.question;
  //console.log(question);
  answerModel
    .findOne({ question: question })
    .then(async (question) => {
      if (!question) {
        let answers = new answerModel({
          answer: [
            {
              answer: req.body.answer,
              user: req.body.user,
              upvotes: req.body.upvotes,
              date : req.body.date
            },
          ],
          question: req.body.question,
        });
        let answerData = await answers.save();

        return res.redirect("../public/single_ans.html")//res.status(200).json({ message: "Question and Answer Updated" });
      } else {
        let answerArray;
        answerModel.findOneAndUpdate(
          { question: req.body.question },
          {
            $push: {
              answer: {
                answer: req.body.answer,
                user: req.body.user,
                upvotes: req.body.upvotes,
                date : req.body.date
              },
            },
          },
          { new: true },
          function (error, data) {
            if (error) {
              console.log("Error in Update ", error);
              return res.status(400).json({
                message: error.message,
                data: error,
              });
            } else {
              let answers = data.answer;
              return res.redirect("../public/single_ans.html");
              // res.status(200).send({
              //   message: "Answer added Successfully",
              //   answers: answers,
              // });
            }
          }
        );
      }
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message,
        data: err,
      });
    });
};

displayAnswers = async function (req, res) {
  const Question = req.body.question;
  answerModel
    .findOne({ question: Question })
    .then(async (question) => {
      if (!question) {
        return res.json({ message: "No Answers Found" });
      } else {
        let answers = question.answer;
        let date = question.createdAt;
        return res.status(200).send({
          answers: answers,
          date : date,
          message: "Answer displayed",
        });
      }
      
    })
    .catch((err) => {
      if (err) {
        return res.status(err.status).json({ errorData: err });
      }
    });
};

module.exports = { addAnswer, displayAnswers };
