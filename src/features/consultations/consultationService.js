// import axios from "axios";

// const API_URL = "http://localhost:5000/api/";

// const createConsultation = async (consultationData, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.post(API_URL, consultationData, config);

//   return response.data;
// };

// const getConsultations = async (token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.get(API_URL, + "consultations"+ config);

//   return response.data;
// };

// const deleteConsultation = async (consultationId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.delete(API_URL + consultationId, config);

//   return response.data;
// };

// const consultationService = {
//   createConsultation,
//   getConsultations,
//   deleteConsultation,
// };

// export default consultationService;
