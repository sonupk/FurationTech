const express= require("express")
const mongoose=  require("mongoose")
const bodyParser=require("body-parser")

const route=require('./routes/route')

// Set up Express.js
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

// Set up logging with Winston
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
  });


// Connect to the MongoDB database
mongoose
  .connect("mongodb+srv://sonupk:1HivF6DXHWanVcYu@cluster0.vtjazgb.mongodb.net/FT-DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info('Connected to MongoDB'))
  .catch((error) => logger.error('Failed to connect to MongoDB', error));


app.use('/',route)

app.listen(3000, function(){
    console.log("Express app running on "+3000)
    });