import http from "../http-common";

class CommanderService {
  getAll() {
    return http.get("/missioncommander");
  }
  get(id) {
    return http.get(`/missioncommander/${id}`);
  }
  create(data) {
    return http.post("/missioncommander", data);
  }
}

export default new CommanderService();