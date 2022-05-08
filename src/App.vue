<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-white">
      <router-link to="/" class="navbar-brand"><img src="./assets/logo.png" alt="" id="logo-nav">LaunchX</router-link>
      <div class="navbar-nav mr-auto">
          <router-link to="/explorers" class="nav-link">Explorers</router-link>
          <router-link to="/add" class="nav-link">Agregar Explorer</router-link>
          <router-link to="/missioncommanders" class="nav-link">Mission Commanders</router-link>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>

<style>
#logo-nav{
  width: 20%;
  border-radius: 10px;
  margin-right: 20px;
}
</style>