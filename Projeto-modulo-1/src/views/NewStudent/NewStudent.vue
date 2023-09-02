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
        handleSubmit() {
            let formatDate = moment(this.date).format("DD/MM/YYYY")


            const schema = yup.object().shape({
                name: yup.string().required("Nome completo é obrigatório"),
                email: yup.string().email('Email não é válido'),
                contact: yup.number().required("Contato é obrigatório"),
                date: yup.max(new Date(), 'Não é possível incluir uma data futura'),
                cep: yup.number().required("CEP é obrigatório"),
                province: yup.string().required("Estado é obrigatório"),
                city: yup.string().required("Cidade é obrigatório"),
                number: yup.number().required("Número é obrigatório"),
                street: yup.string().required("Rua é obrigatório"),
                neighborhood: yup.string().required("Bairro é obrigatório")



            })

            schema.validateSync(
                {
                    name: this.name,
                    email: this.email,
                    contact: this.contact,
                    date: formatDate,
                    cep: this.cep,
                    province: this.province,
                    city: this.city,
                    number: this.number,
                    street: this.street,
                    neighborhood: this.neighborhood
                },
                { abortEarly: false }
            )





            axios({
                url: `http://viacep.com.br/ws/${this.cep}/json/`,
                method: 'GET'
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