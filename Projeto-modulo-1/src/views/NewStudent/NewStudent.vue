<template>
    <v-form @submit.prevent="handleSubmit" ref="form" class="d-flex h-100 align-center">
        <v-card class="mx-auto pa-12 pb-8" elevation="8" width="800" rounded="lg">
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
                        :rules="[v => !!(v || '').match(/@/) || 'Utilize um email válido']"></v-text-field>
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
                        variant="outlined" :rules="[v => v < this.today || 'Data futura']"></v-text-field>
                </div>

            </div>

            <div class="d-flex justify-space-between">
                <div class="w-25 mr-3">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">CEP</div>
                    <v-text-field type="number" v-model="cep" density="compact" placeholder="00000-000" variant="outlined"
                        @blur="useCep" :rules="[v => !!v || 'CEP é obrigatório']"></v-text-field>
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
                        :rules="[v => !!v || 'Número é obrigatório']"></v-text-field>
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
            today: moment(new Date).format("YYYY-MM-DD")
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
            .then(()=>{
                alert("aluno cadastrado com sucesso")
                this.$refs.form.reset()
            })
            .catch((error)=>{
                alert("falha no cadastro")
            })

        },
        useCep() {
            const token= localStorage.getItem('user_token')
            axios({
                url: `http://viacep.com.br/ws/${this.cep}/json/`,
                method: 'GET',
                headers: {
                    Authorization: `Bearen ${token}`
                }
            })
                .then((res) => {

                    this.province = res.data.uf,
                        this.city = res.data.localidade,
                        this.street = res.data.logradouro,
                        this.neighborhood = res.data.bairro
                })
        }
    }
}
</script>