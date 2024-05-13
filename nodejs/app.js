import express from 'express';
import { configDotenv } from 'dotenv';
import bodyParser from 'body-parser';
import tasks from './routes/tasks.js'
import { main } from './db/connection.js';
import cors from 'cors'
import expressWs from 'express-ws';

const allowedOrigins=['http://localhost:5173']
const app = express();
 expressWs(app);
 configDotenv()
// websocket logic to transfer to multiple clients

// express ws routes
app.ws('/ws',(ws,req)=>{
   console.log('client conected')
   ws.on('message',msg=>{
      console.log(msg)
      ws.send('connection is established and this is the message')
   })
   ws.on('close',msg=>{
      console.log('something went wrong',msg)
   })
})

//middlewares
app.use(cors({
   origin: function (origin, callback) {
     // Check if the origin is allowed or not in the allowedOrigins array
     if (!origin || allowedOrigins.includes(origin)) {
       callback(null, true); // Allow the request
     } else {
       callback(new Error('Not allowed by CORS')); // Block the request
     }
   }
 }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// routes
app.get('/first',(req,res)=>{
    res.send('hello')
   console.log('this will be the response =>',res)
})
// all task related routes is handled with use 
app.use('/api/v1/tasks',tasks)

const start =async()=>{
   try {
      await main(process.env.CONNECTIONSTRING)
      app.listen(process.env.PORT,()=>{
         console.log('listening on port ',process.env.PORT)
      })
   } catch (error) {
      console.log(error)
   }
}
start()
