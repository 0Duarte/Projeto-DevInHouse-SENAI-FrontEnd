<template>
  <v-container>
    <header class="d-flex justify-space-between">
      <div class="d-flex align-end">
        <img class="mr-4" width="50" height="50" src="https://img.icons8.com/doodle/48/group--v1.png" alt="crowd"/>
        <h2>Alunos</h2>
      </div>
      <router-link to="/student/new"><v-btn color="success" variant='outlined'>Novo</v-btn></router-link>
    </header>
    <v-divider class="mt-2" color="black" :thickness="3"></v-divider>

    <v-text-field class="mt-6" v-model="search" placeholder="Digite o nome do aluno" density="compact"
      append-inner-icon="mdi-magnify" variant="outlined"></v-text-field>

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
            <v-btn @click="ViewWorkout(student.id,student.name)" variant="tonal" color="rgb(255, 103, 39)" density="compact" class="mr-4 text-capitalize">Ver</v-btn>
            <v-btn @click="CreateWorkout(student.id, student.name)" variant="tonal" color="success" density="compact" class="text-capitalize">Montar treino</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      students: [],
      search: ''
    }
  },
  computed: {
    filteredStudents() {
      // Filtrar alunos com base no valor de pesquisa
      const searchLowerCase = this.search.toLowerCase();
      return this.students.filter(student => {
        return student.name.toLowerCase().includes(searchLowerCase);
      });
    }
  },
  methods: {
    getStudents() {
      const token = localStorage.getItem('user_token');
      axios({
        url: 'http://localhost:3000/students',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => {
          this.students = res.data.students;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    CreateWorkout(userId, userName){
      this.$router.push({ name: 'WorkoutRegister', params: { id: userId, name: userName} })
    },
    ViewWorkout(userId, userName){
      this.$router.push({ name: 'ViewWorkout', params: { id: userId, name: userName} })
    }
  },
  mounted() {
    this.getStudents();
  }
}
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f3efef;
}
</style>