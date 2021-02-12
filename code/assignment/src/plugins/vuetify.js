import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const theme = {
  secondary: '#7a8c99',
  accent: '#ff9f1c',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107',
  grey: {
    base: '#1b2329',
    darken1: '#0a1014',
    lighten2: '#353f4c',
    lighten3: '#7a8c99'
  },
  white: '#ffffff'
}

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: { ...theme, primary: '#000000' },
      dark: { ...theme, primary: '#ffffff' }
    },
    dark: true
  }
})
