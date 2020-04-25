export const API_URL = (typeof window === 'undefined')
    ? `${process.env.PROTOCOL}${process.env.INTERNAL_API_HOST}:${process.env.INTERNAL_API_PORT}`
    : `${window.location.protocol}//api.${window.location.host}`



if (typeof window === 'undefined') {
    globalThis.API_URL = `${process.env.PROTOCOL}${process.env.API_URL}`;
} else {
    globalThis.API_URL = 'browser'
}