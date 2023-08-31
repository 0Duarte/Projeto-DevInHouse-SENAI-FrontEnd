<template>
  <div>
    <v-layout>
      <v-app-bar color="red">
        <v-app-bar-title>
          <v-icon>mdi-dumbbell</v-icon>
          <v-btn><p>Projeto 1</p></v-btn>
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
      <router-view></router-view>
    </v-layout>
  </div>
</template>