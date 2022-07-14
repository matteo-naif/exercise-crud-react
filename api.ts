import { UserModel } from "./model/user.model";

const BASE = 'https://my-json-server.typicode.com/matteo-naif/example-crud';

const URL_USER_LIST = 'userList';

const get = async (url: string) => await fetch(url, { method: 'GET'});
const del = async (url: string) => await fetch(url, { method: 'DELETE'});

const fetchUserList = async () : Promise<UserModel[]> => {
    const res = await get(`${BASE}/${URL_USER_LIST}`);
    return res.json();
}

const deleteUser = async (id: string) : Promise<void> => {
    const res = await del(`${BASE}/${URL_USER_LIST}/${id}`);
    return res.json();
}

export { fetchUserList, deleteUser }