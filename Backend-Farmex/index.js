const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//Requiring DB part
const db = require('./db')
db.on('error',console.error.bind(console,"Mongo DB connection Error"))

//Setting up Routes
const farmexRouter = require('./Routes/farmexroute');
const questionroute = require('./Routes/QueryRoute');
const answerRoute = require('./Routes/AnswerRoute');
const diseaseRoute = require('./Routes/DiseaseRoute');
const soilRoute = require('./Routes/SoilRoute');

app.use('/api',farmexRouter);
app.use('/api1',questionroute);
app.use('/api2',answerRoute);
app.use('/api3',diseaseRoute);
app.use('/api4',soilRoute);

app.get('/',(req,res)=>{
   res.json({status : "ok"})
})
app.listen(5000,()=>{console.log("Server running on port 5000")})
