export const state = () => ({
  darkTheme: false,
})

export const mutations = {
  TOGGLE_THEME: (state, firstInit) => {
    const themeVehicle = localStorage.getItem('themeVehicle')

    if (firstInit) {
      switch (themeVehicle) {
        case 'dark':
          return (state.darkTheme = !state.darkTheme)
        default:
          return
      }
    }

    switch (themeVehicle) {
      case 'dark':
        localStorage.removeItem('themeVehicle')
        state.darkTheme = !state.darkTheme
        break
      default:
        localStorage.setItem('themeVehicle', 'dark')
        state.darkTheme = !state.darkTheme
    }
  },
}

export const actions = {}

export const getters = {
  isDarkTheme: (state) => state.darkTheme,
}
