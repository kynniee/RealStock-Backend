const express = require("express");
const dotenv = require('dotenv');
const mongoose  = require("mongoose");
const routes = require('./src/routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


dotenv.config()


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb', extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// app.use('/api', router)

routes(app);

mongoose.connect(process.env.MONGO_DB)
.then(() =>{
    console.log('Connected to DB successfully!');
})
.catch((err) => {
    console.error('Failed to connect to DB:', err);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
