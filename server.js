<<<<<<< HEAD
// DEPENDENCIES :

// const express = require('express');
// const exphbs = require('express-handlebars');
//const path = require('path');



// EXPRESS APP : 

// const helpers = require('./utils/helpers');

// const app = express();
// const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });




// Setting the handlebars as the default template engine : 

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');


// app.use(express.static(path.join(_dirname, 'public')));

// ROUTES :

// app.use(require('./controllers/index.js'));


// Making the server to listen : 

// app.listen(PORT, () => {
//   console.log('Server listening on:' + PORT);
// });


//
=======
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');

// stores the session state in sql database
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// starts the app using the session specifications
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
>>>>>>> 04c0ef296fd9f14a299c0243f8c2bd3232d9cb53
