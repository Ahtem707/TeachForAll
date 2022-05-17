import axios from "axios";

class Discipline {
    constructor(id, fullName) {
        this.id = id
        this.fullName = fullName
    }
}

export default {
    state: {
        discipline: null
    },
    mutations: {
        setDiscipline(state, payload) {
            state.discipline = payload
        }
    },
    actions: {
        async getDisciplite({ commit }) {
            commit('clearError')
            commit('setLoading', true)
            try {
                var url = "http://teachforallserver.ahtem.ru/disciplines"
                const response = (await axios.get(url, {})).data;
                if (response.status == "FAILURE") throw Error(response.message)
                const data = response.data
                console.log("myLog: 3", data)
                var discipline = []
                data.forEach(item => {
                    discipline.push(new Discipline(
                        item.disciplineId,
                        item.fullName))
                });
                commit('setDiscipline', discipline)
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        }
    },
    getters: {
        discipline(state) {
            return state.discipline
        }
    }
}