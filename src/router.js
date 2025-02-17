import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/missioncommanders",
    name: "missioncommanders",
    component: () => import("./components/McommanderList")
  },
  {
    path: "/add-mc",
    name: "add-missioncommander",
    component: () => import("./components/AddMcommander")
  },
  {
    path: "/missioncommander/:id",
    name: "mcommander-details",
    component: () => import("./components/Mcommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
