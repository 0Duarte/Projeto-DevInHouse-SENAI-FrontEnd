<template>
    <v-container class="d-flex flex-column mt-15">
        <div>
            <h1>Bem vindo, {{this.userName}}</h1>
        </div>
        <div class="d-flex flex-wrap my-15 justify-space-around">
            <v-card class="d-flex w-100 bg-orange-accent-2" size="x-large" max-width="344" variant="elevated" elevation="8">
                    <div>
                        <v-card-item>
                                <div class="text-h6 mb-1 text-white">{{this.amountStudents}} Alunos</div>
                        </v-card-item>
                        <v-card-actions>
                            <v-btn>
                                <router-link to="/student/new" class="text-white text-decoration-none">Adicionar</router-link>
                            </v-btn>
                        </v-card-actions>
                    </div>
            </v-card>

            <v-card class="d-flex w-100 bg-orange-accent-2" size="x-large" max-width="344" variant="elevated" elevation="8">
                    <div >
                        <v-card-item>
                                <div class="text-h6 mb-1 text-white">{{this.amountExercises}} Exercícios</div>
                        </v-card-item>
                        <v-card-actions>
                            <v-btn>
                                <router-link to="/exercises" class="text-white text-decoration-none">Adicionar</router-link>
                            </v-btn>
                        </v-card-actions>
                    </div>
            </v-card>
        </div>

    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data() {
       return{
        amountStudents: 0,
        amountExercises: 0,
        userName: ""
       }
    },
    methods: {
        loadDashboard() {
            const token= localStorage.getItem('user_token')

            axios({
                url: 'http://localhost:3000/dashboard',
                method: 'GET',
                headers: {
                    Authorization: `Bearen ${token}`
                }
            })
            .then((res)=>{
                this.amountStudents=res.data.amount_students
                this.amountExercises=res.data.amount_exercises
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    mounted(){
        this.loadDashboard()
        this.userName= localStorage.getItem('user_name')
    }
}
</script>