 
// including non global modules in page----------------------------------------------

// const { application } = require("express");

// const fs = require("fs");
// fs.writeFileSync("hello.txt","hello gys"
// )


// building a basic server using http module-----------------------------------------------------



// const http = require("http");
// http.createServer((req,resp)=>{
//     resp.write("<h1>hello this is my server</h1>");
//     resp.end();
// }).listen(4500);

// const http= require("http");
// const ankit = (req,resp)=>{
//     resp.write("<h1>hello this is my server</h1>");
//        resp.end();
// }
// http.createServer(ankit).listen(4500);

//creating a simple api -------------------------------------------------------------------------

// const http= require("http");
// const ankit = (req,resp)=>{
//     resp.writeHead(200,{"content-type":"application\json"})
//     resp.write(JSON.stringify({"marks":'38'}));
//        resp.end();
// }
// http.createServer(ankit).listen(4100);




// creating a simple and verifying it with the postman-----------------------------------------------------------



// const http = require("http");
// const serve= (req,resp)=>{
//     resp.writeHead(200,{"content-type":"application\json"})
//     resp.write(JSON.stringify([
//         {"name":"ankit"},
//         {"age":"22"},
//         {"goal":"full Stack Developer"}
//     ]))
//     resp.end()
// }
// http.createServer(serve).listen(4100);
// console.log("goal is almost hit")

// curd operations. -----------------------------------------------------------
//creating file-- and writing inside it.--------------------------------------------------------------------


// const fs = require('fs');
// const path = require('path');
// const dirPath=path.join(__dirname,"project2");
// console.log(dirPath);
// for ( index = 0; index <4; index++)
// {
//    fs.writeFileSync(dirPath+`/hello${index}.txt`,`this is ${index}st project`)
// }
// fs.readdir(dirPath,(err,item)=>{
//     console.log(item);
// });
// just practicing

//read file--------------------------------------------------------------------------------------------


// const fs = require("fs");
// const path = require('path') ;
// const dirPath=path.join(__dirname,"project2");
// const filePath = `${dirPath}/hello5.txt`;
// fs.readFile(filePath,"utf8",(err,item)=>{//if utf8 is not put here then it will give buffer value in terminal , buffer is just a memory .
//   console.log(item);
// })


// update the file by appending some text--------------------------------------------------------------------------------

// const fs = require("fs");
// const path = require('path') ;
// const dirPath=path.join(__dirname,"project2");
// const filePath = `${dirPath}/hello5.txt`;
// fs.appendFile(filePath, "hii i am ankit kumar dubey.",(err)  => {
//   if (!err) console.log("the file is updated successfully");
// });



//rename the file name-----------------------------------------------------------------------------------------

// const fs = require("fs");
// const path = require('path') ;
// const dirPath=path.join(__dirname,"project2");
// const filePath = `${dirPath}/fruit.txt`;
// fs.rename(filePath, `${dirPath}/hello2.txt`,(err)  => {
//   if (!err) console.log("the file  name   is updated successfully");
// });



//deleting the file ----------------------------------------------------------------------------------------------

// const fs = require("fs");
// const path = require('path') ;
// const dirPath=path.join(__dirname,"project2");
// const filePath = `${dirPath}/hello2.txt`;
// fs.unlinkSync(filePath)


// asynchronous and synchronous concept of node------------------------------------------------------------------------------------


// node and js both are asynchronous language means the code do not execute step by step . to describe the architecture of node js we must know about settimeout function and must have some basic knowledge of promises or call back function.
// here is an example to demonstrate the architecture of node js .about


// console.log("starting up")
// setTimeout(()=>{
//   console.log("2 sec delay")
// },2000)
// setTimeout(()=>{
//   console.log("0 sec delay")
// },0)
// console.log("finishing up")

// now , here we have two setTimeout functions in which we have delay of 0 and 2 seconds .
// there are three things
// 1.Call stack
// 2.Node Api
// 3.CallBack Queue

// now when the above node program runs , main function is called in call stack , after that two things are also called in that , which is starting up and finishing up and both of them are printed in terminal after that main  vanishes.

// now the left two delayed logs do not gets into call stack , rather they go to node api block and then the 0 sec will go to callback Queue first followed by 2 sec. these at last gets into call stack when the call stack is empty.

// they get into node api block because setTimeout is not a part of js or node js rather its based on c and c++ , so they go like that , this is the normal architecture of a node js program execution.



// express js installation and working -----------------------------------------------------------------------------------------

// const express = require("express");
// const app =express();

// app.get('',(req,res)=>{
//     res.send("hello,this is Home Page");
// })
// app.get('/about',(req,res)=>{
//     res.send("hello,this is About Page , and your name is "+ req.query.name);
// })
// app.listen(5000)


// how to render html files inside a node file------------------------------------------------------------------------------

// const express= require("express");
// const app = express();

// const path = require("path");
// const pathName = path.join(__dirname,"project2")
// app.use(express.static(pathName))

// app.listen(5000)


// how to remove extension from the above rendered pages of html ....we will have to go with app.get method ------------------------------------------------------------------------------------------------


// const express = require("express");
// const app = express();
// const path = require( "path"); 
// const pathName = path.join(__dirname,"project2");
// app.get("",(req,res)=>{
//     res.sendFile(pathName+"/index.html" )
// })
// app.get("/about",(req,res)=>{
//     res.sendFile(pathName+"/about.html")
// })
// app.get("*",(req,res)=>{
//     res.sendFile(pathName+"/page.html")
// })
// app.listen(5000)




//template engine using ejs to set dynamic routings  in this we created profile route and which was dynamic and some static routes too like home about etc    we have to put a simple syntax inside profile page (route) like <%= user.name %> which will fetch the value of the name provided in the user object..-----------------------------------------------------------------------------------------------------


// const express = require("express");
// const app = express();
// const path = require( "path");
// const pathName = path.join(__dirname,"project2")
// app.set("view engine","ejs");


// app.get("",(req,res)=>{
//     res.sendFile(pathName+"/index.html")
// })
// app.get("/profile",(req,res)=>{
//     const user ={
//         name : "ankit kumar dubey",
//         email:"abc.com"
//     }
//     res.render("profile",{user})
// })
// app.get("/about",(req,res)=>{
//     res.sendFile(pathName+"/about.html")
// })
// app.get("*",(req,res)=>{
//     res.sendFile(pathName+"/page.html")
// })
// app.listen(5000)






//how to include a header.ejs file(small html content) into the login route , it is simple , first create a header.ejs inside the views folder  and write whatever you want to put in the login page then there is a simple syntax like  <%-include ("header") %> to be written inside the login page ,which will include the header into the login page.---------------------------------------------------------------------------------

// const express = require("express");
// const app = express();
// const path = require( "path");
// const pathName = path.join(__dirname,"project2")
// app.set("view engine","ejs");



// app.get("/login",(req,res)=>{
//     res.render("login")
// })

// app.get("*",(req,res)=>{
//     res.sendFile(pathName+"/page.html")
// })
// app.listen(5000)






//middleware are used to filter the request and response and also in authentication purposes,------------------------------------------------------------------------------------------------------------------------------------------------------------
// there are several types of middle-wares
// 1.Application-level-if applied once it is for all routes.
// 2.Router-level -for a particular or for a group of routes.
// 3.Error-handling
// 4.Built-in 
// 5.Third-party




// const express = require("express");
// const app =express();
// const reqFilter = (req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("Pleas provide the age")
//     }
//     else if(req.query.age<18){
//         resp.send("you are under  age")
//     }
//     else{
//         next()
//     }
// }
// app.use(reqFilter)

// app.get('',(req,res)=>{
//     res.send("hello,this is Home Page");
// })
// app.get('/about',(req,res)=>{
//     res.send("hello,this is About Page , and your name is ");
// })
// app.listen(5000)

//if you don't want to use application level middleware , rather you want to go with one route at or selected route then shut the app.use(reqFilter) , and use for whom ever you want by putting reqFilter as a third argument of app.get----------------------------------------------------------------------------------------------------------------------------------------------

// const express = require("express");
// const app =express();
// const reqFilter = (req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("Pleas provide the age")
//     }
//     else if(req.query.age<18){
//         resp.send("you are under  age")
//     }
//     else{
//         next()
//     }
// }
// // app.use(reqFilter)

// app.get('',reqFilter,(req,res)=>{
//     res.send("hello,this is Home Page");
// })
// app.get('/about',(req,res)=>{
//     res.send("hello,this is About Page , and your name is ");
// })
// app.listen(5000)



//now if we want to use the middleware from a different file then
// we will make another file and then we will export it from there and further we will use it in the next.js file
//we have to use these three extra syntaxes like
// const reqFilter=require("./middleware")
// const route=express.Router()
// route.use(reqFilter)
// app.use("/",route),and after that we will use route in the place of app where ever we want out module middleware to work-------------------------------------------------------------------------------------------------------------------------------------------------------------




// const express = require("express");
// const app =express();
// const reqFilter=require("./middleware")
// const route=express.Router()
// route.use(reqFilter)

// route.get('',(req,res)=>{
//     res.send("hello,this is Home Page");
// })
// app.get('/about',(req,res)=>{
//     res.send("hello,this is About Page , and your name is ");
// })
// app.use("/",route)
// app.listen(5000)

//  ----------------------------------------------------------------------------------------------------------------------------------------------------------------
//now we have to install mongodb and install it , in mongodb 6.02 the mongo command wasn't working properly ,while i was checking it on command prompt, so i degraded it to 5.19, 
// after downloading mongodb , you need to install mongodb npm package by "npm i mongodb", whose syntax we will use to connect to mongodb server with our node.

// we can connect the node with mongodb by npm package mongo driver package syntax , so we will create a separate file for connect page and we will use it by importing it wherever we want to connect.

// const {MongoClient} = require('mongodb')
// const url= 'mongodb://localhost:27017';
// const databaseName='e-comm'
// const client= new MongoClient(url);

// async function dbConnect()
// {
//     let result = await client.connect();
//     db= result.db(databaseName);
//     return db.collection('products');
  
// }
// module.exports= dbConnect;
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// how to read the data present in the database(mongodb), if you want to read the specific data like in the below case name : "nord" so you can write it simply in the find(),as shown in the example below.

// remember one more thing that  we have imported our connect page .we will do it every time.

// const dbConnect= require('./mongodb');


// const main=async ()=>{
//    let data = await dbConnect();
//    data = await data.find({name:'nord'}).toArray();
//    console.log(data)
// }

// main()


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// now similarly (insert data form node to mongodb )
//  if you run it without acknowledged then also it will run finely , and you will get in terminal that acknowledged as true , so we are using it in if statement to show in console. now the data is inserted into the collection.

// const dbConnect = require('./mongodb');

// const insertData=async ()=>{
//    let data = await dbConnect();
//   let result = await data.insert(
//       [
//           {name:'max 5',brand:'micromax',price:420,category:'mobile'},
//           {name:'max 6',brand:'micromax',price:520,category:'mobile'},
//           {name:'max 7',brand:'micromax',price:620,category:'mobile'},

//       ]
//   )
//   if(result.acknowledged)
//   {
//       console.warn("data is inserted")
//   }
// }

// insertData();

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// update the chunk may be one or many chunks . updateOne will do just one update and that also the upper one and only update() will update many.

// const dbConnect= require('./mongodb')

// const updateData=async ()=>{
//     let data = await dbConnect();
//     let result = await data.update(
//         { name:'max 5'},
//         {
//             $set:{name:'max pro 5', price:1000}
//         }
//         )
//     console.log(result)

// }

// updateData();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// for deletion of the data form Mongodb ,deleteMany will delete all of max 7 , only delete will delete the first one.
 
// const { MongoDBNamespace } = require('mongodb');
// const dbConnect = require('./mongodb');

// const deleteData=async ()=>{
// let data = await dbConnect();
// let result = await data.deleteMany({name:'max 7'})
// console.log(result)

// }
 
// deleteData();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// now sending , reading , updating ,deleting by get , post ,put , delete method  by postman to mongodb .


// const dbConnect = require('./mongodb');
// const express = require('express');
// const mongodb = require('mongodb');
// const app = express();

// app.use(express.json());

// app.get('/', async (res, resp) => {
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     resp.send(data);
// });

// app.post("/", async (req, resp) => {
//     let data = await dbConnect();
//     let result = await data.insert(req.body)
//     resp.send(result)

// })

// app.put("/:name", async (req, resp) => {          //:name has been used as suppose the postman given data has name section and that has also to be updated then, we give the name value to be changed in query only , any object key can be taken like "/:brand" and for this req.params.brand should be taken//. 
//     const data = await dbConnect();
//     let result = data.updateOne(
//         { name: req.params.name },
//         { $set: req.body }
//     )
//     resp.send({ status: "updated" })
// })

// app.delete("/:id", async (req,resp)=>{
//     console.log(req.params.id);
//     const data = await dbConnect();
//     const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})     //if we are not using id , we are using name then simply" await data.deleteOne(req.params.name) but if are giving the id then go by this.//
//     resp.send(result)
// })

// app.listen(5000)
