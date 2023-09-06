<template>
    <v-container>
        <header class="d-flex justify-space-between">
            <h3>Treinos - {{ this.student_name }} </h3>
        </header>
        <v-divider class="mt-2 mb-2" color="black" :thickness="3"></v-divider>

        <h1 class="mb-6">Hoje</h1>

        <div v-for="workout in filteredWorkout">
            <v-checkbox v-model="check" @change="checkboxChanged(workout.id, workout.day)"
                :label="`${workout.exercise_description} | ${workout.weight}KG | ${workout.repetitions} repetições | ${workout.break_time} min de pausa`"
                density="compact" hide-details="true"></v-checkbox>
        </div>


        <div class="d-flex align-center flex-column mt-15">
            <v-btn-toggle color=deep-orange variant="elevated" v-model="toggleDay" divided elevation="3">
                <v-btn class="text-capitalize" value="segunda">Segunda</v-btn>
                <v-btn class="text-capitalize" value="terca">Terca</v-btn>
                <v-btn class="text-capitalize" value="quarta">Quarta</v-btn>
                <v-btn class="text-capitalize" value="quinta">Quinta</v-btn>
                <v-btn class="text-capitalize" value="sexta">Sexta</v-btn>
                <v-btn class="text-capitalize" value="sabado">Sábado</v-btn>
                <v-btn class="text-capitalize" value="domingo">Domingo</v-btn>
            </v-btn-toggle>
        </div>
        <v-card class="mx-auto pa-12 mt-2 pb-8" elevation="3" rounded="lg">
            <p v-for="workout in filteredToggleWorkout">{{ workout.exercise_description }} | {{ workout.weight }}KG |
                {{ workout.repetitions }} repetições | {{ workout.break_time }} min de pausa</p>
        </v-card>

        <v-snackbar v-model="snackbar" timeout=2000 :color="colorSnack"
      elevation="5" variant="tonal" multi-line>
            {{ this.snackText }}
        </v-snackbar>

    </v-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
    data() {
        return {
            student_id: '',
            student_name: '',
            workouts: [],
            day: '',
            toggleDay: "",
            check: '',
            snackText: '',
            snackbar: false,
            colorSnack: ''
            


        }
    },
    methods: {
        getWorkouts() {
            axios({
                url: `http://localhost:3000/workouts?student_id=${this.student_id}`,
                method: 'GET'
            })
                .then((res) => {
                    this.workouts = (res.data.workouts)
                    
                })
                .catch(() => {
                    this.snackText='Erro ao carregar dados dos treinos', this.snackbar=true
                    this.colorSnack='error'
                })
        },
        getDay() {
            let today = moment(new Date).format('dddd')
            this.day = today === "Sunday" ? "domingo" :
                today === "Saturday" ? "sabado" :
                    today === "Monday" ? "segunda" :
                        today === "Tuesday" ? "terca" :
                            today === "Wednesday" ? "quarta" :
                                today === "Thursday" ? "quinta" :
                                    today === "Friday" ? "sexta" :
                                        this.day;

        }, checkboxChanged(id, day) {
            if (this.check) {
                axios({
                    url: 'http://localhost:3000/workouts/check',
                    method: 'POST',
                    data: {
                        workout_id: id,
                        student_id: this.student_id,
                        day_of_week: day

                    }
                })
                .then((res)=>{
                    this.snackText=res.data.message, this.snackbar=true
                    this.colorSnack='success'
                })
                .catch(()=>{
                    this.snackText='Erro ao concluir treino', this.snackbar=true
                    this.colorSnack='error'
                })
            }

        }

    },
    mounted() {
        this.student_id = this.$route.params.id
        this.student_name = this.$route.params.name
        this.getWorkouts()
        this.getDay()
        this.toggleDay = this.day
        console.log(this.toggleDay)

    },
    computed: {
        filteredWorkout() {
            const TodayWorkout = this.day.toLowerCase();
            return this.workouts.filter(workout => {
                return workout.day.toLowerCase().includes(TodayWorkout);
            });
        },
        filteredToggleWorkout() {
            const ToggleWorkout = this.toggleDay
            return this.workouts.filter(workout => {
                return workout.day.toLowerCase().includes(ToggleWorkout);
            });
        }
    }


}

</script>

