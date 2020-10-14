import express from 'express';
import webpack from "webpack";
import wepackDevMiddleware from "webpack-dev-middleware"
import webpackConfig from '../../triqui/webpack.config'
const TRiquiCtrl = require('./controllers/triqui-controller');
const bodyParser = require('body-parser');
require('dotenv').config()

//init packages
const app = express();


//settings
app.set('port', process.env.port || 3000)

/*----------  Config the app to accept JSON  ----------*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//middlewares
app.use(wepackDevMiddleware(webpack(webpackConfig)));

//routes
app.get('/', (req, res)=>{
    res.send('Hola Mundo')
})

app.post('/api/save', TRiquiCtrl.saveHistory)
app.get('/api/getData', TRiquiCtrl.getHistory)


app.listen(app.get('port'), () =>{
    console.log("server on port", app.get('port'))
});
