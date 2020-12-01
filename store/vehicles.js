import { getVehicles } from '@/api/request'

export const state = () => ({
  vehicles: null,
  error: false,
  loading: true,
  filter: 'whatever',
})

export const mutations = {
  SET_VEHICLES: (state, payload) => (state.vehicles = payload),
  SET_ERROR: (state) => (state.error = false),
  REMOVE_ERROR: (state) => (state.error = true),
  REMOVE_LOADING: (state) => (state.loading = false),
  SET_FILTER: (state, filter) => (state.filter = filter),
  ADD_VEHICLE: (state, vehicle) => state.vehicles.push(vehicle),
}

export const actions = {
  async fetch_vehicles({ commit }) {
    try {
      const response = await getVehicles()
      commit('REMOVE_ERROR')
      commit('REMOVE_LOADING')
      commit('SET_VEHICLES', response)
      return response
    } catch (e) {
      commit('REMOVE_LOADING')
      commit('SET_ERROR')
    }
  },
}

export const getters = {
  getVehicles: (state) => state.vehicles,
  getError: (state) => state.error,
  getLoading: (state) => state.loading,
  getVehicleByName: (_, getters) => (name) =>
    getters.getVehicles.filter((v) => v.name === name)[0],
  getCategories: (state) => {
    const categorySet = new Set()
    state.vehicles.map((v) => categorySet.add(v.type))
    return categorySet
  },
  getFilter: (state) => {
    if (!state.filter) return 'whatever'
    return state.filter
  },
  getVehiclesByFilter: (_, getters) => {
    const filtred = getters.getVehicles.filter(
      (v) => v.type === getters.getFilter
    )
    if (filtred.length) {
      return filtred
    } else return getters.getVehicles
  },
}
