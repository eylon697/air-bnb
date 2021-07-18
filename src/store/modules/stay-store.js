import { stayService } from '../../services/stay.service.js'
export const stayStore = {

    strict: true,
    state: {
        stay: '',
        stays: [],
        currstay: '',
        filterBy: {
            mainFilter: '',
            country: '',
            city: '',
            propertyType: '',
            guests: '',
            checkIn: '',
            checkOut: '',
            minPrice: 0,
            maxPrice: Infinity,
            beds: 0,
            bedrooms: 0,
            bathrooms: 0
        }
    },
    getters: {
        stays(state) {
            return state.stays
        },
        stay(state) {
            return state.stay
        },
        filterBy(state) {
            return state.filterBy
        },
    },
    mutations: {
        setStays(state, { stays }) {
            state.stays = stays
        },
        setStay(state, { stay }) {
            state.stay = stay
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        }
    },
    actions: {
        async loadStays({ commit, state }, { filterBy }) {
            try {
                commit({ type: 'setFilter', filterBy })
                const stays = await stayService.query(state.filterBy)
                commit({ type: 'setStays', stays })
                console.log('Stays Loaded successfuly', stays)
            } catch (err) {
                console.log('Cannot load stays', err);
                throw err;
            }
        },
        async loadStay({ commit, state }, { stayId }) {
            try {
                const stay = await stayService.getById(stayId)
                commit({ type: 'setStay', stay })
                console.log('Stay Loaded successfuly', state.stay)
            } catch (err) {
                console.log('Cannot load stay', err);
                throw err;
            }
        },
        saveStay() {

        },
        addReview() {

        },
    }
}