import axios from 'axios'

function setAuthHeader(token) {
    axios.defaults.headers.common.Authorization = token
}

function deleteAuthHeader() {
     axios.defaults.headers.common.Authorization = '';
}
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';



async function getTasks() {
    const response = await axios.get('/contacts')
    return response.data
}


async function addTask(data) {
    const response = await axios.post('/contacts', data)
    return response.data

}


async function deleteTask(id) {
    const response = await axios.delete(`/contacts/${id}`)
    return response.data.id
}

async function updateTask(data) {
    const response = await axios.patch(`/contacts/${data.id}`, data.data)
    return response
}

// -----------------------------------------------------------

async function registerFetch(data) {
    axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
    const response = await axios.post('users/signup', data)
    return response
}

async function logInFetch(data) {
        const response = await axios.post('users/login', data)
    return response
    
}

async function logOutFetch() {
    await axios.post('users/logout')
    // console.log('object')
    deleteAuthHeader()
}

async function refreshUserFetch() {
    const response = await axios.get('users/current')
    // console.log(response)
    return response
}

export {getTasks, addTask, deleteTask, registerFetch, logInFetch, logOutFetch, setAuthHeader, updateTask, refreshUserFetch}