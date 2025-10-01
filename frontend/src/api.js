// simple wrapper for backend calls
import axios from 'axios';
const base = axios.create({ baseURL: 'http://localhost:4000', timeout: 30000 });

export async function uploadResume(formData) {
  const r = await base.post('/upload-resume', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  return r.data;
}
export async function generateQuestions(role, resumeText) {
  const r = await base.post('/generate-questions', { role, resumeText });
  return r.data;
}
export async function evaluateAnswers(session) {
  const r = await base.post('/evaluate-answers', session);
  return r.data;
}
export async function submitSession(payload) {
  const r = await base.post('/submit-session', payload);
  return r.data;
}
export async function listSessions() {
  const r = await base.get('/sessions');
  return r.data;
}
export async function deleteSession(id) {
  const r = await base.delete(`/sessions/${id}`);
  return r.data;
}
export async function getSession(id) {
  const r = await base.get(`/sessions/${id}`);
  return r.data;
}
