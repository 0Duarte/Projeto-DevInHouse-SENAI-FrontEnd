<template>
    <v-container>
        <v-header class="d-flex justify-space-between">
            <h2>Alunos</h2>
            <v-btn>Novo</v-btn>
        </v-header>
        <v-divider class="mt-2" color="black" :thickness="3"></v-divider>

        <v-text-field class="mt-6" placeholder="Digite o nome do aluno" density="compact" append-inner-icon="mdi-magnify"
            variant="outlined"></v-text-field>

            <table id="tabelaInfo" >
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maria</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>


    </v-container>
</template>

<style scoped>
    table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
  }

  th, td {
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