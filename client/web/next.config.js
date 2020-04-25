module.exports = {
    env: {
        API_URL: `${process.env.PROTOCOL}${process.env.API_URL}${process.env.APP_PORT !== 80 ? `:${process.env.APP_PORT}` : null}`,
        APP_URL: `${process.env.PROTOCOL}${process.env.HOST_URL}${process.env.APP_PORT !== 80 ? `:${process.env.APP_PORT}` : null}`,
    },
}