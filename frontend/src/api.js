import axios from "axios";

const API_BASE_URL = "http://localhost:8888";

export const fetchBasicQuiz = () => axios.get(`${API_BASE_URL}/quiz/basic`);
export const fetchIntermediateQuiz = () =>
  axios.get(`${API_BASE_URL}/quiz/intermediate`);
export const fetchAdvanceQuiz = () => axios.get(`${API_BASE_URL}/quiz/advance`);

export const fetchBasicTyping = () => axios.get(`${API_BASE_URL}/typing/basic`);
export const fetchIntermediateTyping = () =>
  axios.get(`${API_BASE_URL}/typing/intermediate`);
export const fetchAdvanceTyping = () =>
  axios.get(`${API_BASE_URL}/typing/advance`);
export const fetchAllUsers = () => axios.get(`${API_BASE_URL}/api/users`);
export const fetchUserById = (id) =>
  axios.get(`${API_BASE_URL}/api/users/${id}`);
export const updateUser = (id, data) =>
  axios.put(`${API_BASE_URL}/api/users/${id}`, data);
export const createUser = (userData) =>
  axios.post(`${API_BASE_URL}/api/users`, userData);
