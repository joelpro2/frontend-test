<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn link
               text
               plain
               @click="$router.go(-1)"
               data-cy="back"
        ><v-icon>mdi-arrow-left-bold</v-icon>Back</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="movie">
      <v-col cols="12" md="6" lg="7">
        <v-row align="center">
          <v-col>
            <h1 class="text-capitalize" data-cy="movie-title">{{ `${movie.Type} ${movie.Title}` }}</h1>
          </v-col>
          <v-col cols="auto">
            <v-btn :large="$vuetify.breakpoint.lgAndUp"
                   icon
                   :color="favourite ? 'pink': ''"
                   :ripple="false"
                   plain
                   @click="favourite=!favourite"
                   data-cy="like">
              <v-icon :large="$vuetify.breakpoint.mdAndDown" :x-large="$vuetify.breakpoint.lgAndUp">mdi-heart</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <h4>Plot</h4>
          </v-col>
          <v-col cols="12">
            <p class="text-justified" data-cy="movie-plot">{{ movie.Plot }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="auto" :class="[{'mr-7': $vuetify.breakpoint.mdAndUp}]">
            <h4>Cast</h4>
            <ul data-cy="movie-cast">
              <li v-for="(actor, index) in movie.Actors.split(', ')" :key="index">
                {{ actor }}
              </li>
            </ul>
          </v-col>
          <v-col cols="12" md="auto" :class="[{'mx-7': $vuetify.breakpoint.mdAndUp}]">
            <h4>Genre</h4>
            <ul data-cy="movie-genre">
              <li v-for="(genre, index) in movie.Genre.split(', ')" :key="index">
                {{ genre }}
              </li>
            </ul>
          </v-col>
          <v-col cols="12" md="auto" :class="[{'ml-7': $vuetify.breakpoint.mdAndUp}]">
            <h4>Director</h4>
            <ul data-cy="movie-director">
              <li v-for="(director, index) in movie.Director.split(', ')" :key="index">
                {{ director }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" lg="5" class="order-first order-md-last">
        <v-img :src="movie.Poster" lazy-src="@/assets/diamond.png" data-cy="movie-poster"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import Cookies from '@/services/Cookie'

export default {
  name: 'Movie',
  props: {
    id: { required: true }
  },
  created () {
    this.favourite = Cookies.getCookie(this.id) || false
    this.CLEAR_RESULTS()
    this.FETCH_MOVIES({ i: this.id, plot: 'full' }).then(result => {
      this.movie = result[0]
    })
  },
  data: () => ({
    movie: null,
    favourite: null
  }),
  computed: {

  },
  methods: {
    ...mapActions([
      'FETCH_MOVIES',
      'CLEAR_RESULTS'
    ])
  },
  watch: {
    // favourites should be stored in a database
    favourite (val) {
      if (this.id) {
        Cookies.setCookie(this.id, val, 30)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.text-justified {
  text-align: justify;
  text-justify: inter-character;
}
</style>
