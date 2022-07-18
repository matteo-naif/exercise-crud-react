import { UserModel } from './model/user.model'

const BASE = 'https://my-json-server.typicode.com/matteo-naif/example-crud'

const URL_USER_LIST = 'userList'

const get = async (url: string) => await fetch(url, { method: 'GET' })
const del = async (url: string) => await fetch(url, { method: 'DELETE' })

const fetchUserList = async (): Promise<UserModel[] | undefined> => {
	const res = await get(`${BASE}/${URL_USER_LIST}`)

	if (!res.ok) throw new Error('error')

	return res.json()
}

const deleteUser = async (id: string): Promise<{ id: string }> => {
	const res = await del(`${BASE}/${URL_USER_LIST}/${id}`)

	if (!res.ok) throw new Error('error')

	return { id: id }
}

export { fetchUserList, deleteUser }
