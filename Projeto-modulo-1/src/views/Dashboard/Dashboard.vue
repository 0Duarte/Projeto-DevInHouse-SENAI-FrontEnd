<template>
    <v-container  class="d-flex flex-column mt-15">
        <div>
            <h1>Bem vindo fulano</h1>
        </div>
        <div class="d-flex flex-wrap my-15 justify-space-between">
            <v-card class="d-flex w-100" size="x-large" max-width="344" variant="outlined">
                    <div>
                        <v-card-item>
                                <div class="text-h6 mb-1">{{this.amountStudents}} Alunos</div>
                        </v-card-item>
                        <v-card-actions>
                            <v-btn variant="outlined">
                                Adicionar
                            </v-btn>
                        </v-card-actions>
                    </div>
            </v-card>

            <v-card class="d-flex w-100" size="x-large" max-width="344" variant="outlined">
                    <div>
                        <v-card-item>
                                <div class="text-h6 mb-1">{{this.amountExercises}} Exercícios</div>
                        </v-card-item>
                        <v-card-actions>
                            <v-btn variant="outlined">
                                Adicionar
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
       }
    },
    methods: {
        loadDashboard() {
            console.log("entrou aq")

            axios({
                url: 'http://localhost:3000/dashboard',
                method: 'GET',
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
        console.log("entreou aq")
    }
}
</script>