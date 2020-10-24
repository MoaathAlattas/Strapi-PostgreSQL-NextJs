module.exports = ({ env }) => ({
    "host": '0.0.0.0',
    "port": env.int('API_PORT', 80),
    "url":`http://${env('API_HOST', '0.0.0.0')}:${env.int('API_PORT', 80)}`,
    "cron": {
      "enabled": false
    },
    "admin": {
      "autoOpen": false
    },
  })