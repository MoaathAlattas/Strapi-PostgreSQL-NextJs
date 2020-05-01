function handleErrors(res) {
    if (!res.ok) throw Error(res.statusText);
    return res
}

async function _get(url = null, opt = null) {
    let ctx = globalThis.ctx || null
    let options = { credentials: "include", ...opt }
    if (ctx?.req) {
        options.headers = { ...options.headers, cookie: ctx.req.headers.cookie }
    }
    const data = await (await fetch(url, options).then(handleErrors)).json()
    if (data.code && data.code === 400) return;

    globalThis.ctx = null
    return data
}

async function _post(method, url = null, body = null, opt = null) {
    let ctx = globalThis.ctx || null
    let options = {
        method: method,
        credentials: "include",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body),
        ...opt
    }
    if (ctx?.req) {
        options.headers = { ...options.headers, cookie: ctx.req.headers.cookie }
    }
    const data = await (await fetch(url, options).then(handleErrors)).json()
    if (data.code && data.code === 400) return;

    globalThis.ctx = null
    return data
}

async function _del(url = null, opt = null) {
    let ctx = globalThis.ctx || null
    let options = {
        method: "DELETE",
        credentials: "include",
        ...opt
    }
    if (ctx?.req) {
        options.headers = { ...options.headers, cookie: ctx.req.headers.cookie }
    }
    const data = await (await fetch(url, options).then(handleErrors)).json()
    if (data.code && data.code === 400) return;

    globalThis.ctx = null
    return data
}

//query
function _find(collection, parameters) {
    let p = parameters ? `?${parameters}` : ''
    return _get(`${process.env.API_URL}/${collection}${p}`)
}

function _findOne(collection, id, parameters) {
    let p = parameters ? `?${parameters}` : ''
    return _get(`${process.env.API_URL}/${collection}/${id}${p}`)
}

function _count(collection, parameters) {
    let p = parameters ? `?${parameters}` : ''
    return _get(`${process.env.API_URL}/${collection}/count${p}`)
}

function _create(collection, body) {
    return _post("POST", `${process.env.API_URL}/${collection}`, body)
}
function _update(collection, body, id) {
    return _post("PUT", `${process.env.API_URL}/${collection}/${id}`, body)
}
function _delete(collection, id) {
    return _del(`${process.env.API_URL}/${collection}/${id}`)
}
//

//auth
function _login(identifier, password) {
    return _post("POST", `${process.env.APP_URL}/api/login`, {
        identifier,
        password
    })
}
function _logout() {
    return _post("POST", `${process.env.APP_URL}/api/logout`)
}
function _current() {
    return _get(`${process.env.APP_URL}/api/me`)
}
function _refresh() { }
function _forgetPassword() { }

export const query = {
    find: _find,
    findOne: _findOne,
    count: _count,
    create: _create,
    update: _update,
    delete: _delete,
}

export const auth = {
    login: _login,
    logout: _logout,
    current: _current,
    refresh: _refresh,
    forgetPassword: _forgetPassword
}