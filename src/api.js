import request from './utils/request';

const prefix = '/api';
const base = '/base';

// export async function login(params) { return request(`${prefix}${system}/user/login`, { method: 'POST', body: params }); }
// export async function register(params) { return request(`${prefix}${system}/user/register`, { method: 'POST', body: params }); }
// export async function logout() { return request(`${prefix}${system}/user/logout`); }
// export async function listUser(params) { return request(`${prefix}${system}/user/list?${stringify(params)}`); }
// export async function insertUser(params) { return request(`${prefix}${system}/user/insert`, { method: 'POST', body: params }); }
// export async function updateUser(params) { return request(`${prefix}${system}/user/update`, { method: 'POST', body: params }); }

export async function user() { return request(`${prefix}${base}/user`, { method: 'GET' }); }

// 用户模版
export async function allUserTemplate(params) { return request(`${prefix}${base}/user-template/all`, { method: 'GET', body: params }); }
export async function listUserTemplate(params) { return request(`${prefix}${base}/user-template/list`, { method: 'GET', body: params }); }
export async function insertUserTemplate(params) { return request(`${prefix}${base}/user-template/insert`, { method: 'POST', body: params }); }
export async function updateUserTemplate(params) { return request(`${prefix}${base}/user-template/update`, { method: 'POST', body: params }); }
export async function deleteUserTemplate(params) { return request(`${prefix}${base}/user-template/delete`, { method: 'DELETE', body: params }); }
