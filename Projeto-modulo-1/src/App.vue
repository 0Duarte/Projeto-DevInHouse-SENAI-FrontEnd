<template>
  <v-layout>
    <v-app-bar v-if="shouldRenderComponent" id="background" >
      <v-app-bar-title>
        <router-link to="/dashboard" class="text-white text-decoration-none">
          <img src="./utils/logobranca1.png" width="110" alt="">
        </router-link>
      </v-app-bar-title>

      <v-btn>
        <router-link to="/dashboard" class="text-white text-decoration-none">Home</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/student/list" class="text-white text-decoration-none">Alunos</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/exercises" class="text-white text-decoration-none">Exercícios</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/" class="text-white text-decoration-none">Sair<v-icon color="#FFF" class="ml-2">mdi-logout</v-icon></router-link>
      </v-btn>
    </v-app-bar>
    <v-main class="bg-blue-grey-lighten-5">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  methods: {
    
  },
  computed: {
    shouldRenderComponent() {
      const excludedRoutes = ['/', '/signup'];
      return !excludedRoutes.includes(this.$route.path);
    }
  }
}
</script>

<style>
  #background {
  background: linear-gradient(to right, #ff8616, #fc7634);
}
</style>