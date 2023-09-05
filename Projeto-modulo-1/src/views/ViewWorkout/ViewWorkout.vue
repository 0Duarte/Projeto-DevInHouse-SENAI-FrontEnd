<template>
    <v-container>
        <header class="d-flex justify-space-between">
            <h3>Treinos - {{ this.workouts[1].student_name }}</h3>
            <v-btn color="success" variant='outlined'>Novo</v-btn>
        </header>
        <v-divider class="mt-2" color="black" :thickness="3"></v-divider>

        <!-- <div>
            <div class="d-flex align-center flex-column bg-grey-lighten-4 pa-6">
                <v-btn-toggle v-model="toggle" divided>
                    <v-btn class="text-capitalize">Segunda</v-btn>
                    <v-btn class="text-capitalize">Terca</v-btn>
                    <v-btn class="text-capitalize">Quarta</v-btn>
                    <v-btn class="text-capitalize">Quinta</v-btn>
                    <v-btn class="text-capitalize">Sexta</v-btn>
                    <v-btn class="text-capitalize">Sábado</v-btn>
                    <v-btn class="text-capitalize">Domingo</v-btn>

                </v-btn-toggle>
            </div>
        </div> -->
        <h1>Hoje</h1>

        <v-checkbox label="Checkbox"></v-checkbox>
        
        <table id="tabelaInfo">
            <thead>
                <tr>
                    <th class="w-50" scope="col">Nome</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in filteredStudents" :key="student.id">
                    <td>{{ student.name }}</td>
                    <td>
                        <v-btn @click="ViewWorkout(student.id)" variant="outlined" color="success" density="compact"
                            class="mr-4 text-capitalize">Ver</v-btn>
                        <v-btn @click="CreateWorkout(student.id)" variant="outlined" color="success" density="compact"
                            class="text-capitalize">Montar treino</v-btn>
                    </td>
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
            toggle: null,
            student_id: '',
            workouts: [ ]

        }
    },methods:{
        getWorkouts(){
            axios({
                url: `http://localhost:3000/workouts?student_id=${this.student_id}`,
                method: 'GET'
            })
            .then((res)=>{
                this.workouts=(res.data.workouts)
            })
            .catch(()=>{
                console.log("deu ruim")
            })
        }
    },
    mounted() {
        this.student_id=this.$route.params.id 
        this.getWorkouts()
    }

}

</script>

