<template>
    <v-form @submit.prevent="handleSubmit" ref="form" class="d-flex h-100 align-center">
        <v-card class="mx-auto pa-12 pb-8" elevation="8" width="800" rounded="lg">
            <div class="d-flex align-end mb-4">
                <img width="64" height="64" src="https://img.icons8.com/cotton/64/000000/add-male-user--v2.png"
                    alt="add-male-user--v2" />
                <h2 class="ml-4 pt-1">Cadastro de aluno</h2>
            </div>
            <v-divider class="mb-2" color="black" :thickness="3"></v-divider>
            <div class="d-flex justify-space-between">
                <div class="w-50 mr-4">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Nome completo</div>
                    <v-text-field v-model="name" density="compact" placeholder="Coloque o nome do aluno" variant="outlined"
                        :rules="[v => !!v || 'Nome é obrigatório']" required></v-text-field>
                </div>

                <div class="w-50">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Email</div>
                    <v-text-field type="email" v-model="email" density="compact" placeholder="xxxx@xxx.com"
                        variant="outlined"
                        :rules="[value => !value || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) || 'Insira um email válido.']"></v-text-field>
                        
                </div>
            </div>

            <div class="d-flex justify-space-between">
                <div class="w-50 mr-4">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Contato</div>
                    <v-text-field type="number" v-model="contact" density="compact" placeholder="(00) 00000-0000"
                        variant="outlined" :rules="[v => !!v || 'Contato é obrigatório']"></v-text-field>
                </div>

                <div class="w-50">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Data de nascimento</div>
                    <v-text-field type="date" v-model="date" density="compact" placeholder="(00) 00000-0000"
                        variant="outlined" :rules="[v => v < this.today || 'Insira uma data válida']"></v-text-field>
                </div>

            </div>

            <div class="d-flex justify-space-between">
                <div class="w-25 mr-3">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">CEP</div>
                    <v-text-field type="number" v-model="cep" density="compact" placeholder="00000000" variant="outlined"
                        @blur="useCep" :rules="[v => !!v || 'CEP é obrigatório', v=> v>0 || 'Valor inválido']"></v-text-field>
                </div>

                <div class="w-25 mr-3">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Estado</div>
                    <v-text-field v-model="province" density="compact" variant="outlined"
                        :rules="[v => !!v || 'Estado é obrigatório']"></v-text-field>
                </div>
                <div class="w-50">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Cidade</div>
                    <v-text-field v-model="city" density="compact" variant="outlined"
                        :rules="[v => !!v || 'Cidade é obrigatório']"></v-text-field>
                </div>
            </div>

            <div class="d-flex justify-space-between">
                <div class="w-50 mr-4">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Número</div>
                    <v-text-field type="number" v-model="number" density="compact" variant="outlined"
                        :rules="[v => !!v || 'Número é obrigatório', v=> v>0 || 'Valor inválido']"></v-text-field>
                </div>

                <div class="w-50 mr-4">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Logradouro</div>
                    <v-text-field v-model="street" density="compact" variant="outlined"
                        :rules="[v => !!v || 'Logradouro é obrigatório']"></v-text-field>
                </div>
                <div class="w-50">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Bairro</div>
                    <v-text-field v-model="neighborhood" density="compact" variant="outlined"
                        :rules="[v => !!v || 'Bairro é obrigatório']"></v-text-field>
                </div>
            </div>
            <div class="d-flex">
                <div class="w-100">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Complemento</div>
                    <v-text-field v-model="complement" density="compact" variant="outlined"></v-text-field>
                </div>
            </div>
            <div class="d-flex justify-space-between">
                    <div>
                        <v-btn @click="backRoute" class="w-25 " block color=red-lighten-1 size="large" variant="elevated">
                            Voltar
                        </v-btn>
                    </div>
                    <div>
                        <v-btn class="w-25 " type="submit" block color="rgb(255, 103, 39)" size="large" variant="elevated">
                            Cadastrar
                        </v-btn>
                    </div>
            </div>
        </v-card>
        <v-snackbar v-model="snackbar" timeout=2000 :color="colorSnack" elevation="5" variant="tonal" multi-line>
            {{ this.snackText }}
        </v-snackbar>
    </v-form>
</template>

<script>
import axios from 'axios';
import moment from 'moment'
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
            complement: '',
            today: moment(new Date).format("YYYY-MM-DD"),
            snackText: '',
            snackbar: false,
            colorSnack: ''
        }
    },
    methods: {
        async handleSubmit() {
            const { valid } = await this.$refs.form.validate()
            if (!valid) {
                return
            }
            axios({
                url: 'http://localhost:3000/students',
                method: 'POST',
                data: {
                    name: this.name,
                    email: this.email,
                    contact: this.contact,
                    date_birth: this.date,
                    cep: this.cep,
                    street: this.street,
                    number: this.number,
                    neighborhood: this.neighborhood,
                    city: this.city,
                    province: this.province,
                    complment: this.complement
                }
            })
                .then(() => {
                    this.snackText="Aluno cadastrado com sucesso!", this.snackbar=true
                    this.colorSnack='success'
                    this.$refs.form.reset()
                })
                .catch((error) => {
                    this.snackText="Falha ao cadastrar aluno", this.snackbar=true
                    this.colorSnack='error'
                })

        },
        useCep() {
            axios({
                url: `http://viacep.com.br/ws/${this.cep}/json/`,
                method: 'GET',
                
            })
                .then((res) => {

                    this.province = res.data.uf,
                    this.city = res.data.localidade,
                    this.street = res.data.logradouro,
                    this.neighborhood = res.data.bairro
                })
        },
        backRoute(){
            this.$router.go(-1)
        }
    }
}
</script>