<template>
    <v-container>
        <header class="d-flex align-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFg0lEQVR4nO2aW4hWVRTHf5PpTNCVEYOG0BzzEqZm0dRDL5GZ2oWksB4iosyggiC6UvYQBZWmkk5o1FMS3TPNkrJCk8os6EG7mU0pg0zjZGjkjDZfLFgHNtt9ztlnn/19o3D+sGAu+7/Wvpy912VvqFChQoUKFeqNCcAC4EVgI7AT6AMGVPr0b/K/Tm07nuMcU4DFwG6gFih/AItU13GBJmAOsKXEoNPkC2C22jgmcSHwdR0GbsuXwHSOIbQAS4EjGZ0+AKwHHgau1jPhDGC4ivw8EbhG23yonDR9YmsJ0DzUgx8HfJfSyUEdyI06SUUhnHmqYzDFxrdAO0OES4F9KR17G5ga0dY04N0UW71ABw3GlcBBR2fElc2oo92rgF8ddg/W2e5RK/+PoxOvAafih7OAm4GFwMvAJ8CPwC6NCfpUp5wVNsTG6ymT0NGIPb/PYfxxD+5FwAvADwVO/Acy9D3haP8nMJY6oSXlwLsnh3e+rnCIy9uco/teB+ebenmHpQ5jj+Vwbgf+LeHzxd2NzLHh+hIkeowe5Bxx7PkszM9wX0XkVo/+vWFxDqvniIImR4S3M+fAk9j9UITBi/Ro0JMVS5ymB6gdOkfBHEenxA1m4aNIgzdFDtAszHJwZsaYgC2OICcL50b69G0ZUPeZhfcszqayg59qKRz0iPAerMPgE7kjx/YFjsmfXGYCFlvKJKGh4Cq8CowGbgGWARuAn3RvH1IvsRfYAbwJPARMAp53TMArHvY3WJxny0zAbkuZJDZ52GG0F8/RFmj7BGCbZf97D95NFqcr0D4TLEUHPLO6/QbnM8rH/mYfuj04JzlCdYlgC+OugM8fPawSznOUg3wFewx9smUI2AZ3hhjvtJTI3vSByZGEpyxesnT64BGLszzE8EZLiVRyfGByYtQEbguYgGstzschhn+zlPiWqU1O6AFo4rKACZhocaSGUBi9lpJWT57JkQOpLNoCJmCkI00ujH5LyQgPzuUWJ0YJe4SlU2zkodni+B6emRPQXPDcWE08rDb0Sm0hDy0xJqDXUjLKg/O30V6iv1gYY+gVG3k4M8YW2GUpcdXnbPwVcGYU3dMSOudhkiN9L+0Gr/PgfGW0F18cC49adwF5uD6GG+wMKHzOtzgrKY+Vlk4ps+VhYYxAaIGlRG5o8nAisNbg/FeyStuuOhJ976sNChZkZGEKY7ylRPbeyR48uev7wOBJSh2KJYaedao7D6c4ynFByRB6P28qugE/XGJNnFSJQhbArCj7XnrMi5UOo+VlU9mn+GOtVZryWb0Ew/VOIOGvKcD93OrzM5TAFEtZrcBrjXOMK66iB+Iqg9encUBICa90SQwtL9esvUiBrMys0S3LCY+btE3SflDfDPhifeyiKPospUy5eZ3FXZMSJLXq/0Ine3ZA+d4LTfosxVQsqfLpfnTnHcEereMnmGVVfhIRrg/khcnvBe8VC2G642rsLU/uVsfAfEW4Pgv0juNqLOYDjaN8ciJPko2ztZCZtL9bS+BpA96rbZLfu1VHFp5y6Clbi3Si2VGmFrnP0Xa0Poq0U+pWzSqXW9Xj/fq3UdrG5PSrLld2eX/KV+NTuwhCuyNNrukqNKm7WuUYeHKiD/OwMSzlaq1fdY9RW0872vSo+60rOlLeB22zSuK2yCr7wvw6bBlI+RLl3uJiGoQZKZOQJVJfCK1F5IkM/goajA6ttPh2cnuBLbC9gN6eRq68jbH6Jse3s93qTeYC52nFt01/nqvPcEyvkSdbG7HnfbzDIvW9tQbJYXV1dTvtQzDNkTfUQzbXI8iJiZmahMQe+KZYsX2jMFkfJ3SVGHSX5vOlU9qhxjity63QCu0v+uK0X0V+/ln/t0KfwgSXsSpUqFChQgW88D8YlxB821s5jAAAAABJRU5ErkJggg==">
            <h2 class="ml-6 pt-4">Treinos - {{ this.student_name }} </h2>
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

