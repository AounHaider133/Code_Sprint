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
