//
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

//instantiated express library
const app = express();

//configured app as json
app.use(bodyParser.json());
//to encode my messages
app.use(bodyParser.urlencoded({ extended: true}));



//configured the port to use
app.listen(8080, () => {
 console.log(`server started and running`);
});
