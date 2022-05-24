class Discipline {
    disciplineId;
    logoSrc;
    fullName;
    shortName;
    description;
    authorId;
    numberOfHour;
    format;
}

export default {
    state: {
        path: {
            discipline: "disciplines"
        },
        discipline: []
    },
    mutations: {
        setDiscipline(state, payload) {
            state.discipline = payload
        }
    },
    actions: {
        getDiscipline(self) {
            const path = self.state.path.discipline
            const data = {}
            return self.dispatch('getRequest', path, data)
                .then((res) => {
                    var discipline = Object.assign(Array(Discipline.prototype), res)
                    console.log(discipline)
                    self.commit('setDiscipline', discipline)
                    return discipline
                })
                .catch((err) => {
                    throw err
                })
        }
    },
    getters: {
        discipline(state) {
            return state.discipline
        }
    }
}