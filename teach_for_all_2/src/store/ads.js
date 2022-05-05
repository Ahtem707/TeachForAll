export default {
    state: {
        ads: [
            {
                title: 'Иностранный язык (англ)',
                description: 'Кафедра английской и немецкой филологии',
                promo: false,
                imageSrc: 'https://vjoy.cc/wp-content/uploads/2020/07/english_18_27171312.jpg',
                id: '123'
            },
            {
                title: 'Базы данных',
                description: 'Кафедра информационных технологий',
                promo: true,
                imageSrc: 'https://billydec.com/assets/images/bd-share-image.jpg',
                id: '1234'
            },	
            {
                title: 'Программная инженерия',
                description: 'Кафедра информационных технологий',
                promo: true,
                imageSrc: 'https://razoom.mgutm.ru/pluginfile.php/890/course/overviewfiles/%D0%9F%D0%98%D0%9F%D0%9F_%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0.jpg',
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