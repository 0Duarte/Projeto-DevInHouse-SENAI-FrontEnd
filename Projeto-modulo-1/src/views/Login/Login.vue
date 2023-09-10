<template>
  <div id="background" class="h-100">
    <div class="h-100 d-flex align-center justify-center">

      <v-card class="pa-12 pb-8 w-50 h-50" min-height="715.88" elevation="8" rounded="8">
        <div class="d-flex h-100">
          <div class="w-50 align-center justify-center">
            <h1 class="text-yellow-darken-4">GymPro</h1>
            <img class="w-100 h-80" src="../../utils/undraw_Personal_trainer_re_cnua.png" alt="">
          </div>

          <div class="d-flex flex-column w-50 justify-center">
            
            <div>
              <div class="text-subtitle-1 text-medium-emphasis">Email</div>
              <v-text-field v-model="email" density="compact" placeholder="Seu melhor email"
                prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>
            </div>
            <div>
              <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Senha</div>
              <v-text-field v-model="password" type='password' density="compact" placeholder="Coloque sua senha"
                prepend-inner-icon="mdi-lock-outline" variant="outlined"></v-text-field>
            </div>
            <v-card v-if="errors.length != 0" id="errorField" class="mb-4">
              <v-card-text class="text-medium-emphasis text-caption">
                <div class="d-flex flex-column ">
                  <p class="mb-2">{{ this.errors.email }}</p>
                  <p>{{ this.errors.password }}</p>
                  <p>{{ this.errors.InvalidLogin }}</p>
                </div>
              </v-card-text>
            </v-card>
            <div class="d-flex align-center justify-center">
              <v-btn block class="mb-8" color="rgb(255, 103, 39)" size="default" variant="elevated" @click="handleLogin">
                Entrar
              </v-btn>
            </div>
            <div class="text-center">
              <p>Ainda não tem conta?</p>
              <router-link to="/signup" class="text-deep-orange-darken-1 text-decoration-none">
                Cadastre-se<v-icon icon="mdi-chevron-right"></v-icon>
              </router-link>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
  <v-snackbar v-model="snackbar" timeout=2000 :color="colorSnack" elevation="5" variant="tonal" multi-line>
    {{ this.snackText }}
  </v-snackbar>
</template>

<script>
import * as yup from "yup"
import { captureErrorYup } from '../../utils/captureErrorYup'
import axios from 'axios'

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      snackText: '',
      snackbar: false,
      colorSnack: ''
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
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then((response) => {
            localStorage.setItem("user_token", response.data.token)
            localStorage.setItem("user_name", response.data.name)
            this.$router.push('/dashboard')

          })
          .catch((error) => {
            if (error.response.data.error) {
              this.errors = { InvalidLogin: error.response.data.error }
            }
          })
          .catch(() => {
            this.snackText = 'Erro de autenticação no servidor', this.snackbar = true
            this.colorSnack = 'error'
          })

      } catch (error) {
        if (error instanceof yup.ValidationError) {
          this.errors = captureErrorYup(error)
        }
      }
    }
  }
}
</script>

<style scoped>
#background {
  background: linear-gradient(to right, #ff9900a1, #fc7634);
}
</style>