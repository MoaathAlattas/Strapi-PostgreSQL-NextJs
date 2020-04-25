module.exports = {
    env: {
        API_URL: `${process.env.APP_PROTOCOL}${process.env.API_HOST}${process.env.API_PORT !== '80' ? `:${process.env.API_PORT}` : ''}`,
        APP_URL: `${process.env.APP_PROTOCOL}${process.env.PROXY_HOST}${process.env.PROXY_PORT !== '80' ? `:${process.env.PROXY_PORT}` : ''}`,
    },
}