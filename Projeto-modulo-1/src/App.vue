<template>
    <v-layout>
      <v-app-bar v-if="shouldRenderComponent"
        color="rgb(246, 86, 38)">
        <v-app-bar-title>
          <v-icon>mdi-dumbbell</v-icon>
          <v-btn @click="testaRota">
            <p>Projeto 1</p>
          </v-btn>
          <router-link to="/"></router-link>
        </v-app-bar-title>

        <v-btn>
          <p>Home</p>
        </v-btn>
        <v-btn>
          <p>Alunos</p>
        </v-btn>
        <v-btn>
          <p>Exercícios</p>
        </v-btn>
        <v-btn>
          <p class="mr-2">Sair</p>
          <v-icon color="#FFF">mdi-logout</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
</template>

<script>
  export default{
    methods:{
      testaRota(){
        console.log(this.$route.path)
      }
    },
    computed: {
    shouldRenderComponent() {
      const excludedRoutes = ['/login', '/signup'];
      return !excludedRoutes.includes(this.$route.path);
    }
  }
}
</script>