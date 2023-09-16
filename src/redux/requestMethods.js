import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWYzMTI3YjU1NmRmZWJhZjIyN2Y4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDg2NTAxMCwiZXhwIjoxNjk1MTI0MjEwfQ.Dwn3xRxBIQq4gaN4_75TFuNZxdTM3VYO-VXlwwgI2lk'

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token }
})