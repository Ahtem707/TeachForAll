import Vue from 'vue';
import Vuex from 'vuex';
import ads from './ads';
import user from './user';
import shared from './shared';
import discipline from './discipline';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ads,
        user,
        shared,
        discipline,
    },
    state: {
        serverUrl: "http://teachforallserver.ahtem.ru/",
        // serverUrl: "http://localhost:3000/",
        status: {
            failure: "FAILURE",
            success: "SUCCESS"
        }
    },
    actions: {
        async getRequest(self, path, data) {
            const url = self.state.serverUrl + path;
            self.commit('clearError')
            self.commit('setLoading', true)
            let h = new Headers({
                "accept": "application/json",
                "UserId": self.getters.user.id,
                "Authorization": self.getters.user.token
            })
            let req = new Request(url, {
                method: "GET",
                headers: h,
                body: data
            })
            const result = fetch(req)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Bad JSON convert")
                    }
                })
                .then((res) => {
                    const isCucrrectReq = !Object.prototype.hasOwnProperty.call(res, "status");
                    if (isCucrrectReq) throw Error("Wrong answer")
                    if (res.status == self.state.status.failure) throw Error(res.message)
                    return res.data
                })
                .catch((err) => {
                    self.commit('setError', err.message)
                    throw err
                })
            self.commit('setLoading', false)
            return result
        }
    },
    getters: {
        serverUrl(state) {
            return state.serverUrl
        }
    }
})

/* ##### Вызов функций #####

// mutations
this.$store.commit('setDiscipline', discipline)

// action
this.$store.dispatch('loginUser', user)
    .then(() => {
        // do something
    })
    .catch((err) => {
        console.log(err)
    })

// getters
this.$store.getters.isUserLoggedIn
*/