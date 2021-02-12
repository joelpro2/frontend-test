<template>
  <v-container class="list fill-height">
    <v-row align="center" justify="center" v-if="!GET_TOTAL_RESULTS">
      <v-col cols="auto">
        <p class="text-center">No info available</p>
      </v-col>
    </v-row>
    <v-row align="center" v-else data-cy="movie-row">
      <v-col cols="12"
             sm="12"
             md="6"
             lg="4"
             xl="3"
             v-for="(movie, index) in limitedItems"
             :key="index"
             data-cy="movie-card">
        <v-card :to="{ name: 'Movie', params: { id: movie.imdbID } }">
          <v-card-title class="movie-title"
                        :class="[{'grey': $vuetify.theme.dark}]"
                        color="white"
                        data-cy="movie-title"
          >{{ movie.Title }}</v-card-title>
          <v-img :src="movie.Poster"
                 lazy-src="@/assets/diamond.png"
                 :aspect-ratio="3/4"
                 data-cy="movie-image"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" v-if="GET_TOTAL_RESULTS > itemsPerPage * resultsPage">
      <v-col cols="auto">
        <v-btn @click="fetch" data-cy="more">Load More</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapGetters([
      'GET_RESULTS',
      'GET_TOTAL_RESULTS',
      'GET_SEARCH'
    ]),
    limitedItems () {
      return this.itemsPerPage ? this.GET_RESULTS.slice(0, (this.itemsPerPage) * this.resultsPage) : this.GET_RESULTS
    }
  },
  data: () => ({
    itemsPerPage: 12,
    resultsPage: 1,
    apiPage: 2
  }),
  methods: {
    ...mapActions([
      'FETCH_MOVIES',
      'CLEAR_RESULTS'
    ]),
    async fetch () {
      this.resultsPage++
      let payload
      while ((this.itemsPerPage * (this.resultsPage + 1)) > this.GET_RESULTS.length) {
        this.apiPage++
        payload = { s: this.GET_SEARCH, page: this.apiPage }
        await this.FETCH_MOVIES(payload)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-title {
  height: 158px;
}
</style>
