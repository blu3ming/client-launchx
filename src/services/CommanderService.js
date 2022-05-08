import http from "../http-common";

class CommanderService {
  getAll() {
    return http.get("/missioncommander");
  }
  get(id) {
    return http.get(`/missioncommander/${id}`);
  }
}

export default new CommanderService();