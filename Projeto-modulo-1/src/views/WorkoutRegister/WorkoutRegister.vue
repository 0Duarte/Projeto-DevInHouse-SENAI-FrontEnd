<template>
    <v-form @submit.prevent="handleWorkout" ref="form" class="d-flex h-100 align-center">
        <v-card class="mx-auto pa-12 pb-8" elevation="8" width="800" rounded="lg">
            <div>
                <div>
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Exercício</div>
                    <v-select density="compact" :items="exercises" v-model="exerciseId" item-title="description" item-value="id" variant="outlined"
                    :rules="[v => !!v || 'Exercício é obrigatório']"></v-select>
                </div>
            </div>

            <div class="d-flex justify-space-between">
                <div class="w-25 mr-3">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Repetições</div>
                    <v-text-field type="number" v-model="repetitions" density="compact" variant="outlined"
                        :rules="[v => v > 0 || 'Mínimo de 1 repetição']"></v-text-field>
                </div>

                <div class="w-25 mr-3">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Carga</div>
                    <v-text-field type="number" placeholder="Kg" v-model="weight" density="compact" variant="outlined"
                        :rules="[v => v > 0 || 'Carga é obrigatória']"></v-text-field>
                </div>
                <div class="w-50">
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Pausa</div>
                    <v-text-field type="time" v-model="breakTime" density="compact" variant="outlined"
                        :rules="[v => !!v || 'Tempo de pausa é obrigatório']"></v-text-field>
                </div>
            </div>

            <div>
                <div>
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center">Dia da semana</div>
                    <v-select density="compact" :items="items" item-value="value" variant="outlined" item-title="day"
                        v-model="day"></v-select>
                </div>
            </div>
            <div class="d-flex">
                <div class="w-100">
                    <v-text-field class="mt-4" v-model="observations" density="compact" variant="outlined"
                        placeholder="Observações para o treino"></v-text-field>
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
import axios from 'axios'
export default {
    data() {
        return {
            weight: null,
            repetitions: null,
            breakTime: null,
            observations: '',
            items: [
                { day: 'Segunda-feira', value: 'segunda' },
                { day: 'Terça-feira', value: 'terca' },
                { day: 'Quarta-feira', value: 'quarta' },
                { day: 'Quinta-feira', value: 'quinta' },
                { day: 'Sexta-feira', value: 'sexta' },
                { day: 'Sábado', value: 'sabado' },
                { day: 'Domingo', value: 'domingo' },

            ],
            day: '',
            exercises: [],
            exerciseId: []
        }
    },
    methods: {
        getDay() {
            let today = moment(new Date).format('dddd')
            console.log(today)
            this.day = today === "Sunday" ? "domingo" :
                    today === "Saturday" ? "sabado" :
                    today === "Monday" ? "segunda" :
                    today === "Tuesday" ? "terca" :
                    today === "Wednesday" ? "quarta" :
                    today === "Thursday" ? "quinta" :
                    today === "Friday" ? "sexta" :
                    this.day;
        },
        getExercises() {
            const token = localStorage.getItem('user_token')
            axios({
                url: 'http://localhost:3000/exercises',
                method: 'GET',
                headers: {
                    Authorization: `Bearen ${token}`
                }
            })
            .then((res) => {
                this.exercises = res.data
            })
            .catch(()=>{
                console.log("Não foi possível carregar os exercícios")
            })
        },
        async handleWorkout(){
            const { valid } = await this.$refs.form.validate()
            if (!valid) {
                return
            }
            console.log(this.breakTime)
            axios({
                
                url: 'http://localhost:3000/workouts',
                method: 'POST',
                data:{
                    student_id:  this.$route.params.id,
                    exercise_id: this.exerciseId,
                    repetitions: this.repetitions,
                    weight: this.weight,
                    break_time: this.breakTime,
                    day: this.day,
                    observations: this.observations
                }
            })
            .then(()=>{
                console.log("Sucesso ao cadastrar treino")
            })
            .catch((err)=>{
                console.log("Erro ao cadastrar treino")
            })
        },
        teste(){
            console.log(this.exercise)
        }
    },
    mounted() {
        this.getDay()
        this.getExercises()
    }

}
</script>