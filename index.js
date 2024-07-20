const express = require("express")
const app=express()
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Todo=require("./models/todo")
const Todo1=require("./models/todo")
const completedTodo=require('./models/completedTodo')
const { ObjectId } = require("mongodb")
const port=3000
const http=require("http");
app.set("view engine","ejs")
app.use(express.static(__dirname+"/public/"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const dburl="mongodb://0.0.0.0:27017/todoo";
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true});



app.post("/comp/:id",(request,response)=>{
  const todo=new completedTodo({
      todo: request.body.todov
  }) 
  todo.save()
  .then(result=>{
      response.redirect("/")
  })
})


app.post("/",(request,response)=>{
    const todo=new Todo({
        todo: request.body.todovalue
    }) 
    
    
    todo.save()
    
    .then(result=>{
      setTimeout(() => {
        response.redirect("/")
      }, 1000);
    
    })
    
})
app.get("/",(request,response)=>{
    Todo.find()
    .then(result=>{
        response.render("index",{data:result})
        
        console.log(result)
    })
})

app.get("/c",(request,response)=>{
    Todo1.find({completed:true})
    .then(result=>{
        response.render("completed-tasks",{data:result})
        console.log(result)
    })

})

app.get("/c1",(request,response)=>{
  Todo1.find({completed:false})
  .then(result=>{
      response.render("pending-tasks",{data:result})
      console.log(result)
  })

})

app.delete("/:id",(request,response)=>{
    Todo.findByIdAndDelete(request.params.id)
    .then(result=>{
        console.log(result)
    })
})

app.put('/todos/:id', function(req, res) {
    Todo.findByIdAndUpdate(req.params.id, { completed: req.body.completed })
      .then(function(todo) {
        res.send('Todo updated successfully');
      })
      .catch(function(err) {
        console.log(err);
        res.status(500).send('Error updating todo: ' + err.message);
      });
  });

  app.put('/todos/:id', function(req, res) {
    var id = req.params.id;
    Todo.findByIdAndUpdate({_id: id},{ todo: req.body.todos})
      .then(function(todo) {
        res.send('Todo updated successfully for todo');
      })
      .catch(function(err) {
        console.log(err);
        res.status(500).send('Error updating todo: ' + err.message);
      });
  });
  
  app.delete('/comp/:id', function (req, res)  {
    
     completedTodo.findByIdAndDelete(req.params.id)
     .then(function(todo) {
      res.send('Todo updated successfully for todo');
      console.log("i deleted")
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send('Error updating todo: ' + err.message);
    });
  });
  
  


app.listen(port,()=>{
    console.log("server is running on port "+port)
})

