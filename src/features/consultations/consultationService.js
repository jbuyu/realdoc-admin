import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/consultations"
    : "https://realdoc-server.herokuapp.com/api/consultations";

const createConsultation = async (consultationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, consultationData, config);
  return response.data;
};

const getConsultations = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const getPendingConsultations = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "/pending", config);
  return response.data;
};

const getCompletedConsultations = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "/completed", config);
  return response.data;
};

const getConsultation = async (consultationId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + `/${consultationId}`, config);
  return response.data;
};

const deleteConsultation = async (consultationId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + consultationId, config);
  return response.data;
};

const consultationService = {
  createConsultation,
  getConsultations,
  getConsultation,
  deleteConsultation,
  getPendingConsultations,
  getCompletedConsultations,
};

export default consultationService;
