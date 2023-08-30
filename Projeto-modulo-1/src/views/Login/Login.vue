<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <img src="http://teste" alt="">
      <v-text-field v-model="email" label="Email"></v-text-field>
      <v-text-field v-model="password" label="Senha"></v-text-field>
      <v-btn type="submit" block class="mt-2">Entrar</v-btn>
      <p>Ainda não tem conta? Cadastre-se</p>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
      
}
</script>