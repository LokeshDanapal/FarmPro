const alert = require("alert");
const queryModel = require("../Models/queries");
const answerModel = require("../Models/Answers");
const validator = require("node-input-validator");

addAnswer = async (req, res) => {
  let question = req.body.question;
  console.log(req.body);

  try {
    // Try to find the question
    const existingQuestion = await answerModel.findOne({ question: question });

    if (!existingQuestion) {
      console.log("Here now");
      // If the question doesn't exist, create a new one
      const newAnswers = new answerModel({
        answer: [
          {
            answer: req.body.answer,
            user: req.body.user,
            upvotes: req.body.upvotes,
            date: req.body.date,
          },
        ],
        question: req.body.question,
      });

      const answerData = await newAnswers.save();
      res.status(200).json({ message: "Question and Answer Created" });
    } else {
      console.log("In else part");
      // If the question exists, update it with a new answer
      const data = await answerModel.findOneAndUpdate(
        { question: question },
        {
          $push: {
            answer: {
              answer: req.body.answer,
              user: req.body.user,
              upvotes: req.body.upvotes,
              date: req.body.date,
            },
          },
        },
        { new: true }
      ).exec();

      if (data === null) {
        console.log("Its Null");
        return res.status(404).json({ message: "Document not found" });
      }

      res.json({ answers: data.answer });
    }
  } catch (error) {
    console.log("Error in Update", error);
    return res.status(400).json({
      message: error.message,
      data: error,
    });
  }
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
          date: date,
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