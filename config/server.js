module.exports = ({ env }) => ({
  host: env('STRAPI_HOST', 'api.genialnastrona.pl'), 
  port: env.int('STRAPI_PORT', 1337),
  url: env('STRAPI_URL', 'https://api.genialnastrona.pl'), 
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
