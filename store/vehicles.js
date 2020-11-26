import { getVehicles } from '@/api/request'

export const state = () => ({
  vehicles: false,
  error: false,
  loading: true,
})

export const mutations = {
  SET_VEHICLES: (state, payload) => (state.vehicles = payload),
  SET_ERROR: (state) => (state.error = false),
  REMOVE_ERROR: (state) => (state.error = true),
  REMOVE_LOADING: (state) => (state.loading = false),
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
}
