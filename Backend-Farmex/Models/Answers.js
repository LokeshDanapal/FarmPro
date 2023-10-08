const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  answer : {type:String},
  user : {type:String},
  upvotes : {type:Number},
  date : {type:String}
})
const schema = new mongoose.Schema({
    answer: [answerSchema],
    question : {type : String },
    //User : {type : mongoose.Schema.Types.ObjectId, ref: 'UserDetail'},
},{timestamps:true},{ typeKey: '$type' });

const Answers = mongoose.model('Answers',schema);
module.exports = Answers;