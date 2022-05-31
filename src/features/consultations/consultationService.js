import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api/consultations"
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

const getConsultations = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const getDoctorConsultations = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "/doctor-consultations", config);
  return response.data;
};

const getPendingConsultations = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "/pending", config);
  return response.data;
};

const getCompletedConsultations = async token => {
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

const updateConsultation = async (consultationData, token) => {
  const { consultationId, ...updateData } = consultationData;

  // console.log("Updating con", consultationId, updateData);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("making axios req");

  const response = await axios.put(
    API_URL + `/${consultationId}`,
    updateData,
    config
  );
  // console.log("returning response", response);

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
  getDoctorConsultations,
  getCompletedConsultations,
  updateConsultation,
};

export default consultationService;
