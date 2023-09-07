<template>
    <v-container>
        <header class="d-flex justify-space-between">
            <h2>Exercícios</h2>
        </header>
        <v-divider class="mt-2" color="black" :thickness="3"></v-divider>

        <div class="d-flex">
            <v-text-field class="mt-6 mr-4" v-model="exerciseDescription" placeholder="Digite o nome do exercício"
                density="compact" variant="outlined"></v-text-field>
            <v-btn color="success" class="mt-6" @click="exerciseRegister">Cadastrar</v-btn>
        </div>

        <table>
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="exercise in exercises">
                    <td>{{exercise.description}}</td>
                </tr>
            </tbody>
        </table>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            exercises: [],
            exerciseDescription: ''
        }
    },
    methods: {
        loadExercises() {
            axios.get('http://localhost:3000/exercises')
                .then((res) => {
                    this.exercises=res.data
                })
        },
        exerciseRegister() {
            if(this.exerciseDescription===''){
                alert('O nome do exercício é obrigatório')
            } else {
                axios.post('http://localhost:3000/exercises',
                {
                    description: this.exerciseDescription
                })
                .then(()=>{
                    alert("Exercício cadastrado com sucesso")
                    this.loadExercises()
                    this.exerciseDescription= ""
                })
                .catch((error)=>{
                    console.log("Erro ao cadastrar")
                })
            }
            
        }
    },
    mounted(){
        this.loadExercises()
    }

}
</script>