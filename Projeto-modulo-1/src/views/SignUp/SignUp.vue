<template>
    <div>
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">

            <div class="text-subtitle-1 text-medium-emphasis">Nome completo</div>
            <v-text-field v-model="name" density="compact" placeholder="Seu nome completo"
                prepend-inner-icon="mdi-account-circle-outline" variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis">Email</div>
            <v-text-field v-model="email" density="compact" placeholder="Seu melhor email"
                prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Senha</div>
            <v-text-field v-model="password" type="password" density="compact" placeholder="Coloque sua senha"
                prepend-inner-icon="mdi-lock-outline" variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Confirme a senha</div>
            <v-text-field v-model="passwordConfirm" type="password" density="compact" placeholder="Confirme sua senha"
                prepend-inner-icon="mdi-lock-outline" variant="outlined"></v-text-field>

            <div density="compact" class="text-subtitle-1 text-medium-emphasis">Selecione o plano</div>
            <v-select  density="compact" :items="items" item-value="value" variant="outlined" item-title="plan"
                v-model="planSelected"></v-select>

            <v-card v-if="errors.length != 0" class="mb-4">
                <v-card-text class="text-medium-emphasis text-caption">
                    <div class="d-flex flex-column">
                        <p>{{ this.errors.name }}</p>
                        <p>{{ this.errors.email}}</p>
                        <p >{{ this.errors.password }}</p>
                        <p>{{ this.errors.verifyPassword }}</p>
                        <p>{{ this.errors.planSelected }}</p>
                    </div>
                </v-card-text>
            </v-card>

            <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="handleSignUp">
                Cadastrar
            </v-btn>

            <v-card-text class="text-center">
                <p>Já possui uma conta?</p>
                <a class="text-blue text-decoration-none" href="/login" rel="noopener noreferrer" target="_blank">
                    Fazer login<v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import * as yup from "yup"
import { captureErrorYup } from '../../utils/captureErrorYup'
import axios from 'axios'

export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            errors: [],
            items: [
                { plan: 'Bronze', value: 'bronze' },
                { plan: 'Prata', value: 'silver' },
                { plan: 'Ouro', value: 'gold' },
            ],
            planSelected: "bronze"
        }
    },
    methods: {
        handleSignUp() {
            try {
                const schema = yup.object().shape({
                    name: yup.string().required("Nome completo é obrigatório"),
                    email: yup.string().email('Email não é válido').required('Email é obrigatório'),
                    password:
                        yup.string()
                        .min(8, 'A senha deve ser maior')
                        .max(20, 'Deve ter entre 8-20 caracteres')
                        .required("Senha é obrigatória"),
                    verifyPassword: yup
                        .string()
                        .required('A confirmação de senhas é necessária')
                        .oneOf([yup.ref('password')], 'As senhas devem coincidir'),
                    planSelected: yup.string().required("Escolha um plano")
                })

                schema.validateSync(
                    {
                        email: this.email,
                        password: this.password,
                        name: this.name,
                        verifyPassword: this.passwordConfirm,
                        planSelected: this.planSelected

                    },
                    { abortEarly: false }
                )

                    axios({
                        url:'http://localhost:3000/users',
                        method: 'POST',
                        data: {
                            name: this.name,
                            email: this.email,
                            password: this.password,
                            type_plan: this.planSelected
                        }
                    })
                        .then(()=> {
                            alert('Cadastrado com sucesso')
                            this.$router.push('/login')
                        })
                        .catch(()=>{
                            alert("Não foi possível criar a conta nesse momento")
                        })
                    
                    debugger

            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    this.errors = captureErrorYup(error)
                }
            }
        }
    }
}
</script>