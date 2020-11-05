<template>
  <v-app>
    <v-app-bar app color="primary">
        <div class="d-flex align-center">
          <v-img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" alt="Logo" transition="scale-transition" width="40"/>
          <div class="title font-weight-light font-italic">The 15 puzzle game</div>
        </div>

        <v-spacer></v-spacer>

        <v-btn text rounded>
          <span class="mr-2">Restart</span>
          <v-icon>mdi-autorenew</v-icon>
        </v-btn>

        <v-btn @click="toggleTheme" text rounded>
          Toggle theme
          <v-icon ref="brightness">mdi-brightness-2</v-icon>
        </v-btn>
    </v-app-bar>
    <v-main>
      <Board :xSize="4" v-bind:ySize="4"/>
    </v-main>
  </v-app>
</template>

<script>
import Board from './components/Board';

export default {
  name: 'App',

  components: {
    Board,
  },

  data: () => ({
  }),

  methods: {
    toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  }

};
</script>
