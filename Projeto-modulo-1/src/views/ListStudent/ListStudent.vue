<template>
  <v-container>
    <header class="d-flex justify-space-between">
      <h2>Alunos</h2>
      <v-btn>Novo</v-btn>
    </header>
    <v-divider class="mt-2" color="black" :thickness="3"></v-divider>

    <v-text-field class="mt-6" placeholder="Digite o nome do aluno" density="compact" append-inner-icon="mdi-magnify"
      variant="outlined"></v-text-field>

    <table id="tabelaInfo">
      <thead>
        <tr>
          <th class="w-50" scope="col">Nome</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students">
          <td>{{student.name}}</td>
          <td>
            <v-btn  variant="outlined" color="success" density="compact" class="mr-4 text-capitalize">Ver</v-btn>
            <v-btn variant="outlined" color="success" density="compact" class="text-capitalize">Montar treino</v-btn>
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
      students: []

    }
  },
  methods: {
    getStudents() {
      const token = localStorage.getItem('user_token')
      axios({

        url: 'http://localhost:3000/students',
        method: 'GET',
        headers: {
          Authorization: `Bearen ${token}`
        }
      })
        .then((res) => {
          this.students = res.data.students
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted(){
    this.getStudents()
  }
}
</script>







<style scoped>
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