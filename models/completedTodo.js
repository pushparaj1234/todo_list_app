const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const completedTodoSchema = new Schema({
  todo: {
    type: String,
    required: true
  }
  
});

const completedTodo = mongoose.model('completedTodo', completedTodoSchema)
module.exports=completedTodo
