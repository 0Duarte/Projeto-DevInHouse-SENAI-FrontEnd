<template>
    <v-form @submit.prevent="handleWorkout" ref="form" class="d-flex h-100 align-center">
        <v-card class="mx-auto pa-12 pb-8" elevation="8" width="800" rounded="lg">
            <div class="d-flex mb-1">
                <img width="64" height="64" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-workout-daily-routine-wanicon-lineal-color-wanicon.png" alt="external-workout-daily-routine-wanicon-lineal-color-wanicon"/>
                <h1 class="pt-6">Treino</h1>
            </div>
            <v-divider class="" color="black" :thickness="3"></v-divider>
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
                        :rules="[v => v > 0 || 'Carga é obrigatória']" suffix="kg"></v-text-field>
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
            <div class="d-flex justify-space-between">
                    <div>
                        <v-btn @click="backRoute" class="w-25 " block color=red-lighten-1 size="large" variant="elevated">
                            Voltar
                        </v-btn>
                    </div>
                    <div>
                        <v-btn class="w-25 " type="submit" block color="rgb(255, 103, 39)" size="large" variant="elevated">
                            Cadastrar
                        </v-btn>
                    </div>
            </div>
            <v-snackbar v-model="snackbar" timeout=2000 :color="colorSnack"
            elevation="5" variant="tonal" multi-line>
            {{ this.snackText }}
        </v-snackbar>
        </v-card>
    </v-form>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
export default {
    data() {
        return {
            weight: 0,
            repetitions: 0,
            breakTime: "",
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
            exerciseId: '',
            studentId: '',
            snackText: '',
            snackbar: false,
            colorSnack: ''
        }
    },
    methods: {
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
                this.snackText='Treino cadastrado com sucesso', this.snackbar=true
                this.colorSnack='success'
                this.$refs.form.reset()
            })
            .catch((err)=>{
                this.snackText='Erro ao cadastrar treino', this.snackbar=true
                this.colorSnack='error'
            })
        },
        getStudentId(){
            this.studentId = this.$route.params.id
        },
        backRoute(){
            this.$router.go(-1)
        }
    },
    mounted() {
        this.getDay()
        this.getExercises()
        this.getStudentId()
    }

}
</script>