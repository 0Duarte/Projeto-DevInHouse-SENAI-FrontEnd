<template>
  <div>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field v-model="email" density="compact" placeholder="Seu melhor email"
        prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Senha</div>

      <v-text-field v-model="password"
        type='password' density="compact" placeholder="Coloque sua senha"
        prepend-inner-icon="mdi-lock-outline" variant="outlined"></v-text-field>

      <v-card v-if="errors.length != 0" id="errorField" class="mb-4">
        <v-card-text class="text-medium-emphasis text-caption">
          <div class="d-flex flex-column ">
            <p class="mb-2">{{this.errors.email}}</p>
            <p>{{this.errors.password}}</p>
            <p>{{this.errors.InvalidLogin}}</p>
          </div>
        </v-card-text>
      </v-card>

      <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="handleLogin">
        Entrar
      </v-btn>

      <v-card-text class="text-center">
        <p>Ainda não tem conta?</p>
        <router-link to="/signup" class="text-blue text-decoration-none">
          Cadastre-se<v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import * as yup from "yup"
import {captureErrorYup} from '../../utils/captureErrorYup'
import axios from 'axios'

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: []
    }
  },
  methods: {

    handleLogin() {
      try {
        const schema = yup.object().shape({
          email: yup.string().email('Email não é válido').required('Email é obrigatório'),
          password: yup.string().required("Senha é obrigatória")
        })

        schema.validateSync(
          {
            email: this.email,
            password: this.password
          },
          { abortEarly: false }
        )

          axios({
            url: 'http://localhost:3000/sessions',
            method: 'POST',
            data:{
              email: this.email,
              password: this.password
            }
          })
          .then((response)=>{
            localStorage.setItem("user_token", response.data.token)
            localStorage.setItem("user_name", response.data.name)
            console.log("usuario existe")
            
          })
          .catch((error)=>{
            if(error.response.data.error){
              this.errors={InvalidLogin: error.response.data.error}
            }
          })
          .catch(()=>{
            alert("Erro ao fazer autenticação no servidor")
          })

      } catch (error) {
        if (error instanceof yup.ValidationError) {
          console.log(error)
          // capturar os errors do yup
          this.errors = captureErrorYup(error)
          console.log(this.errors)
        }
      }
    }
  }
}
</script>