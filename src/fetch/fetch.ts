import axios from 'axios'
import * as FetchTypes from './fetch.types'

function setAuthHeader(token: string): void {
    axios.defaults.headers.common.Authorization = token
}

function deleteAuthHeader(): void {
     axios.defaults.headers.common.Authorization = '';
}
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';



async function getTasks(): Promise<FetchTypes.Task[] | []> {
    const response = await axios.get<FetchTypes.Task[] | []>('/contacts')
    // console.log('get', response.data)
    return response.data
}


async function addTask(data: Omit<FetchTypes.Task, 'id'>): Promise<FetchTypes.Task> {
    const response = await axios.post<FetchTypes.Task>('/contacts', data)
    console.log('add', data)
    return response.data

}


async function deleteTask(id: string): Promise<FetchTypes.Task> {
    const response = await axios.delete<FetchTypes.Task>(`/contacts/${id}`)
    // console.log('del', response.data)
    return response.data
}

async function updateTask(data: any) {
// console.log(data)
    const response = await axios.patch(`/contacts/${data.id}`, data.data)
    console.log('update', response.data)
    return response
}

// -----------------------------------------------------------

async function registerFetch(data: FetchTypes.InfoForRegister):  Promise<FetchTypes.RegisterLoginType>{
    axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
    const response = await axios.post<FetchTypes.RegisterLoginType>('users/signup', data)
    return response.data
}

async function logInFetch(data: FetchTypes.InfoForLogin): Promise<FetchTypes.RegisterLoginType> {
        const response = await axios.post<FetchTypes.RegisterLoginType>('users/login', data)
    return response.data
    
}

async function logOutFetch(): Promise<void> {
    await axios.post('users/logout')
    // console.log('object')
    deleteAuthHeader()
}

async function refreshUserFetch(): Promise<FetchTypes.UserInfo> {
    const response = await axios.get<FetchTypes.UserInfo>('users/current')
    // console.log(response)
    return response.data
}

export {getTasks, addTask, deleteTask, registerFetch, logInFetch, logOutFetch, setAuthHeader, updateTask, refreshUserFetch}