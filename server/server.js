import express from 'express'
import hbs from 'express-handlebars'
import path from 'path'
import serverApp from './server.app'

const app = express()

// set template engine (handlebars)
app.engine('hbs', hbs({
  defaultLayout: false,
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './public/views/');

app.use(express.static(path.resolve(__dirname, '../public')));

// loading the iso-middleware
app.use(serverApp);

// app.get('/', (request, response) => {
//   response.end('Hello express!')
// })

app.listen(3000, () => console.log('http://localhost:3000'))
