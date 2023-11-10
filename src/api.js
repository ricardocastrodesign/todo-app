import axios from 'axios';

const BASE_URL = 'https://63650452f711cb49d1f2b256.mockapi.io/api/v1/tasks';

// Get tasks
export function getTasks() {
    return axios.get(`${BASE_URL}?sortBy=createdAt&order=desc&page=1&limit=10`);
}

// Create task
export function createTask(description) {
    return axios.post(BASE_URL, {
        description,
        completed: false,
    });
}

// Update task
export function updateTask(id, payload) {
    return axios.put(`${BASE_URL}/${id}`, payload);
}

// Delete task
export function deleteTask(id) {
    return axios.delete(`${BASE_URL}/${id}`);
}
