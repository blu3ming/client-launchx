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
    <img src="./assets/header-1.jpg" alt="" style="width: 100%;"><br><br>
    <div class="container mt-3">
      <router-view />
    </div>
    <footer id="footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
      <div class="container text-center">
        <small>Copyright &copy; blu3ming | Josué Cruz 2022</small>
      </div>
    </footer>
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

#footer {
   position:absolute;
   bottom:0;
   width:100%;
}
</style>