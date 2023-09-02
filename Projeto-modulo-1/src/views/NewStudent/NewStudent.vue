<template>
    <v-form @submit.prevent="handleSubmit" class="d-flex h-100 align-center">
        <v-card class="mx-auto pa-12 pb-8" elevation="8" width="800" rounded="lg">
            <div class="d-flex justify-space-between">
                <div class="w-50 mr-4">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Nome completo</div>
                    <v-text-field v-model="name" density="compact" placeholder="Coloque o nome do aluno"
                        variant="outlined"></v-text-field>
                </div>

                <div class="w-50">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Email</div>
                    <v-text-field type="email" v-model="email" density="compact" placeholder="xxxx@xxx.com"
                        variant="outlined" :rules="[() => !!name || 'Nome é obrigatório']"></v-text-field>
                </div>
            </div>

            <div class="d-flex justify-space-between">
                <div class="w-50 mr-4">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Contato</div>
                    <v-text-field type="number" v-model="contact" density="compact" placeholder="(00) 00000-0000"
                        variant="outlined"></v-text-field>
                </div>

                <div class="w-50">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Data de nascimento</div>
                    <VueDatePicker v-model="date" :max-date="new Date()" variant="outlined" />
                </div>

            </div>

            <div class="d-flex justify-space-between">
                <div class="w-25 mr-3">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">CEP</div>
                    <v-text-field type="number" v-model="cep" density="compact" placeholder="00000-000"
                        variant="outlined"></v-text-field>
                </div>

                <div class="w-25 mr-3">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Estado</div>
                    <v-text-field v-model="province" density="compact" variant="outlined"></v-text-field>
                </div>
                <div class="w-50">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Cidade</div>
                    <v-text-field v-model="city" density="compact" variant="outlined"></v-text-field>
                </div>
            </div>

            <div class="d-flex justify-space-between">
                <div class="w-50 mr-4">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Número</div>
                    <v-text-field type="number" v-model="number" density="compact" variant="outlined"></v-text-field>
                </div>

                <div class="w-50 mr-4">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Logradouro</div>
                    <v-text-field v-model="street" density="compact" variant="outlined"></v-text-field>
                </div>
                <div class="w-50">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Bairro</div>
                    <v-text-field v-model="neighborhood" density="compact" variant="outlined"></v-text-field>
                </div>
            </div>
            <div class="d-flex">
                <div class="w-100">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Complemento</div>
                    <v-text-field v-model="complement" density="compact" variant="outlined"></v-text-field>
                </div>
            </div>
            <div class="d-flex justify-end">
                <div class="w-25">
                    <v-btn type="submit" block color="rgb(255, 103, 39)" size="large" variant="elevated">
                        Cadastrar
                    </v-btn>
                </div>
            </div>
        </v-card>
    </v-form>
</template>

<script>
import moment from 'moment'
import * as yup from 'yup'
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            email: '',
            contact: '',
            date: '',
            cep: '',
            province: '',
            city: '',
            number: '',
            street: '',
            neighborhood: '',
            complement: ''
        }
    },
    methods: {
        
    }
}
</script>