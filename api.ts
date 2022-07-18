const BASE = 'https://my-json-server.typicode.com/matteo-naif/example-crud'

const URL_USER_LIST = 'userList'

const get = async (url: string) => await fetch(url, { method: 'GET' })
const del = async (url: string) => await fetch(url, { method: 'DELETE' })

// TODO - 01

export {}
