import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#13995d",
        secondary: "#18bf74",
        accent: "#ec66a2",
      },
      dark: {
        primary: "#00c853",
        secondary: "#0f7a4a",
        accent: "#565656",
      },
    },
  },
});
