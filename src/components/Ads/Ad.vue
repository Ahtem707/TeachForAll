<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 offset-0>
        <v-card>
          <v-img
            :src="discipline.logoSrc"
            class="img-thumbnail disciplineImg"></v-img>
          <v-card-text>
            <h1 class="text--primary"> {{ discipline.fullName }} </h1>
            <p> {{discipline.description}} </p>
          </v-card-text>
          <v-card-actions>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">№</th>
                  <th scope="col">Файл</th>
                  <th scope="col">Дата</th>
                  <th scope="col">Скачать</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="file of discipline.files" :key="file.id">
                  <th scope="row">{{file.id}}</th>
                  <td>{{file.title}}</td>
                  <td>{{file.data}}</td>
                  <td><v-img style="height: 20px; width: 20px" :src="downImg"></v-img></td>
                </tr>
              </tbody>
            </table>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import downImg from "../../assets/download.png"
  export default {
    props: ['id'],
    data() {
      return {
        downImg,
        discipline: {
          disciplineId: "3",
          logoSrc: "https://oracle-patches.com/images/2019/10/28/Databases_large.jpg",
          fullName: "Базы данных",
          shortName: "БД",
          description: "Теория и практика работы с базами данных",
          author: "Ahtem",
          numberOfHour: null,
          format: null,
          files: []
        }
      }
    },
    methods: {
      getDiscipline() {
        const disciplines = this.$store.getters.discipline
        if(disciplines.length == 0) return;
        let discipline = disciplines.filter((disc) => {
          if(disc.shortName == this.$props.id) return true;
          return false;
        })[0];
        discipline.files = this.getFiles()
        this.discipline = discipline
      },
      getFiles() {
        const files = [
              {
                id: 1,
                title: "РПД",
                data: "23.05.2022"
              },
              {
                id: 2,
                title: "РПД",
                data: "23.05.2022"
              },
              {
                id: 3,
                title: "РПД",
                data: "24.05.2022"
              },
              {
                id: 4,
                title: "РПД",
                data: "26.05.2022"
              }
            ]
        return files
      }
    },
    created() {
      this.getDiscipline()
      this.getFiles()
    }
  }
</script>

<style scoped>
  .table {
    width: 100%;
  }
  .text--primary {
    font-size: 20px;
  }

  .disciplineImg {
    height: 400px;
  }
  tr:hover {
    background-color: lightblue;
  }
</style>
