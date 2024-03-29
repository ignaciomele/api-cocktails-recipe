const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const morgan = require('morgan');

const cocktailsRouter = require('./controllers/cocktails');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());
app.use(logger('dev'));
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('public')));


//working
app.use('/api/cocktails', cocktailsRouter);


// TEST DB
app.get('/', (req, res) => {
	const authorization = req.get('Authorization');
	res.render('index', {
		title: 'Cocktails recipe',
		subTitle: process.env.DB_NAME,
		subTitle1: process.env.DB_HOST,
		subTitle2: process.env.PORT,
		Authorization: process.env.Authorization,
		authorizationGet: authorization
	})
})

app.get('/api/healthsimplescosas', (req, res) => {
	res.json({ "status": "up" })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});


module.exports = app;
