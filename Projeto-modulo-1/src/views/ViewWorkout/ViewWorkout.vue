<template>
    <v-container>
        <header class="d-flex justify-space-between">
            <h3>Treinos - {{ this.student_name }} </h3>
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

        <div v-for="workout in this.workouts">
            <v-checkbox :label="`${workout.exercise_description} | ${workout.weight}KG | ${workout.repetitions} repetições | ${workout.break_time} min de pausa`" density="compact" hide-details="true"></v-checkbox>
        </div>
        
        
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            toggle: null,
            student_id: '',
            student_name: '',
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
        this.student_name=this.$route.params.name 
        this.getWorkouts()
        console.log(moment.locale(pt-br).format('cccc'))
    }

}

</script>

