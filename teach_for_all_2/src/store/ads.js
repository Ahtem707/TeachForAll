export default {
    state: {
        ads: [
            {
                title: 'Фруктовый десерт',
                description: '*описание*',
                promo: false,
                imageSrc: 'https://primedekor.ru/d/%D0%BF%D0%B8%D1%89%D0%B5%D0%B2%D0%BE%D0%B9_%D0%B3%D0%B5%D0%BB%D1%8C.jpg',
                id: '123'
            },
            {
                title: 'Французские макарони',
                description: '*описание*',
                promo: true,
                imageSrc: 'https://img2.goodfon.ru/original/6048x4032/d/a5/macaron-almond-cookies-5700.jpg',
                id: '1234'
            },	
            {
                title: 'Коллекция Bloom',
                description: '*описание*',
                promo: true,
                imageSrc: 'https://tastesdivinesweets.com/wp-content/uploads/2018/07/cupcaketray-2.jpg',
                id: '12345'
            }
        ]
    },
    mutations: {
        createAd (state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        createAd ({commit}, payload) {
            payload.id = ''
            commit('createAd', payload)
        }
    },
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds (state) {
            return state.ads
        },
        adById (state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}