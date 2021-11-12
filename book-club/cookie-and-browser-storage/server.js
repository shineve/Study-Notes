const fastify = require('fastify')();
const path = require('path');
const cookie = require('fastify-cookie');
const port = 3000;

const dayjs = require('dayjs');
dayjs.extend(require('dayjs/plugin/advancedFormat'));
dayjs().format('x');

fastify.register(cookie, { secret: 'pokemon123' });
fastify.register(require('fastify-cors'), {
  credentials: true,
  origin: ['http://localhost:3000', 'http://127.0.0.1:8887'],
});
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
});

fastify.get('/', function (req, res) {
  return res.sendFile('index.html');
});

fastify.get('/admin', (req, res) => {
  return res.sendFile('index.html');
});

// Declare a route
fastify.get('/login', (req, res) => {
  res
    .setCookie('normal', 'normal cookie', { secure: true, sameSite: 'none' })
    .setCookie(`expire ${dayjs().format('YYYY-MM-DD HH:mm')}`, 'expire at 1 minute later', { expires: dayjs().add(1, 'minute').toDate() })
    .setCookie(`max-age ${dayjs().format('YYYY-MM-DD HH:mm')}`, 'max age 1 minute, it only last 1 minute', { maxAge: 60 })
    .setCookie('path', 'this cookie will be sent in every path', { path: '/' })
    .setCookie('path admin', 'this cookie will only send if request url includes admin, example: /admin/*', { path: '/admin' })
    .setCookie('secure', 'secure cookies only allows https, http is disallowed, excecpt localhost', { secure: true })
    .setCookie('httpOnly', 'you can\'t read this through document.cookie', { httpOnly: true })
    .setCookie('SameSite None', 'this cookies allow cross origin', { secure: true, sameSite: 'none' })
    .setCookie('SameSite Lax', 'this cookies allow cross origin GET HTTP request', { sameSite: 'lax' })
    .setCookie('SameSite Strict', 'this cookies only allow same origin', { sameSite: 'strict' })
    .send({
      requestHeader: req.headers,
    });
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(port);
    console.log(`Example app listening at http://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
