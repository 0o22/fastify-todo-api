const port = process.env.PORT || 3000;
const host = 'RENDER' in process.env ? `0.0.0.0` : `localhost`;

const path = require('node:path');
const cors = require('@fastify/cors');
const AutoLoad = require('@fastify/autoload');

const fastify = require('fastify')({
  logger: true,
});

fastify.register(cors, {
  origin: process.env.CLIENT_URL,
});

fastify.register(AutoLoad, {
  dir: path.join(__dirname, 'routes'),
  options: Object.assign({}),
});

fastify.listen({ host, port }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
