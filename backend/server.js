//import dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var Movie = require('./model/movie');

//create express and router instances
const app = express();
const router = express.Router();

//integrate mongodb; hard-coding url for now instead of storing as env var
mongoose.connect('mongodb://localhost:27017/imdbdo', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

//configure server API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

//root
//configure server landing get method
router.get('/', (req, res) => {
    res.json({ message: 'Hello, Doo'});
});

//----------- APIs --------------------------------------// 
//Get all movies
router.get('/movies', (req, res) => {
    Movie.find((err, movies) => {
        if(err) return res.json({ sucess: false, error: err });
        return res.json({ sucess: true, data: movies });
    });
});

//Get movie by id
router.get('/movies/:movieId', (req, res) => {
    //Todo
});

//Get movies by title
router.get('/movies/:movieTitle', (req, res) => {
    //Todo
});

//Get movies by release date
router.get('/movies/:movieDateReleased', (req, res) => {
    //Todo
});

//Add new movie
router.post('/movies', (req, res) => {
    const movie = new Movie();
    const {title, description, releaseDate} = req.body;
    if(!title) {
        return res.json({
            sucess: false,
            error: 'You need to provide a title'
        });
    }
    movie.title = title;
    movie.description = description;
    movie.releaseDate = releaseDate;
    movie.save(err => {
        if(err) return res.json({sucess: false, error: err});
        return res.json({sucess: true});
    });
});

//Edit movie by id
router.put('/movies/:movieId', (req, res) => {
    //Todo
});

//Delete movie by id
router.delete('/movies/:movieId', (req, res) => {
    //Todo
});
//----------- APIs --------------------------------------//

//use router configuration when calling the server APIs
app.use('/api', router);

//configure server to listen to port 3001
app.listen(3001, () => console.log('Listening on port 3001'));
