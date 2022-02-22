import api from "./index";

const gathApi = {
  getSportList: () => api.get("/sportList.json"),
  get: () => api.get("/.json"),
  findGath: (queries) => {
    let query = `sportName=${queries.sport}&areaName=${queries.area}`;
    if (queries.date) query += `&date=${queries.date}`;
    if (queries.time) query += `&time=${queries.time}`;
    if (queries.totalNum) query += `&totalNum=${queries.totalNum}`;
    return api.get(`/document?${query}`);
  },
  createGath: (gath) => api.post("/document", gath),
  joinGath: (documentId) => api.post(`/document/${documentId}`),
  endGath: (documentId) => api.patch(`/document/${documentId}`),
  leaveGath: (documentId, userId) => api.delete(`/document/${documentId}/${userId}`),
  getAllGath: () => api.get("/document/random"),
  getUpcomingGath: (userId) => api.get(`/document/upcoming/${userId}`),
  getPassedGath: (userId) => api.get(`/document/passed/${userId}`),
};

export default gathApi;
