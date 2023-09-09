<template>
  <v-layout>
    <v-app-bar v-if="shouldRenderComponent" color="rgb(246, 86, 38)">
      <v-app-bar-title>
        <v-icon>mdi-dumbbell</v-icon>
        <v-btn @click="testaRota">
          <p>Projeto 1</p>
        </v-btn>
        <router-link to="/"></router-link>
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
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  methods: {
    testaRota() {
      console.log(this.$route.path)
    }
  },
  computed: {
    shouldRenderComponent() {
      const excludedRoutes = ['/', '/signup'];
      return !excludedRoutes.includes(this.$route.path);
    }
  }
}
</script>