import express from 'express'
import hbs from 'express-handlebars'
import iso from './iso'

const app = express()

// set template engine (handlebars)
app.engine('hbs', hbs({
  defaultLayout: false,
  extname: 'hbs'
}));
app.set('view engine', 'hbs');

if (process.env.NODE_ENV === 'production') {
  app.set('views', './dist/views/');
}

// loading the iso-middleware
app.use(iso);

app.get('/', (request, response) => {
  response.end('Hello express!')
})

app.listen(3000, () => console.log('http://localhost:3000'))
