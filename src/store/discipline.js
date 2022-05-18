class Discipline {
    id;
    logo;
    fullName;
    shortName;
    authorId;
    numberOfHour;
    format;
}

export default {
    state: {
        path: {
            discipline: "disciplines"
        }
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
                    var discipline = res.map((item) => {
                        return Object.assign(Discipline.prototype, item)
                    })
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