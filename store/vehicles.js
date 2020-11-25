import { getVehicles } from '@/api/request'

export const state = () => ({
  vehicles: false,
  error: false,
})

export const mutations = {
  SET_VEHICLES: (state, payload) => (state.messages = payload),
  SET_ERROR: (state) => (state.error = true),
  REMOVE_ERROR: (state) => (state.error = false),
}

export const actions = {
  async fetch_vehicles({ commit }) {
    try {
      const response = await getVehicles()
      commit('REMOVE_ERROR')
      commit('SET_VEHICLES', response)
    } catch (e) {
      commit('SET_ERROR')
    }
  },
}

export const getters = {
  getVehicles: (state) => state.vehicles,
  getError: (state) => state.error,
}
