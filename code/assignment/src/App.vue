<template>
  <v-app dark>
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cold="12" md="auto">
          <v-row align="center">
            <v-col cols="12" md="auto">
              <v-img
                alt="Logo"
                class="mt-1"
                contain
                min-width="100"
                src="@/assets/diamond.png"
                max-height="150"
              ></v-img>
            </v-col>
            <v-col cols="12" md="auto"><h3 class="text-center">Diamond</h3></v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-form @submit.prevent="fetch">
            <v-text-field v-model="search"
                          data-cy="search"
                          outlined
                          block
                          hide-details
                          prepend-inner-icon="mdi-magnify"
                          @click:prepend-inner="submit"
            ></v-text-field>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <v-main data-cy="main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  data: () => ({
  }),
  computed: {
    ...mapGetters([
      'GET_SEARCH'
    ]),
    search: {
      get () {
        return this.GET_SEARCH
      },
      set (val) {
        this.UPDATE_SEARCH(val)
      }
    }
  },
  methods: {
    ...mapActions([
      'UPDATE_SEARCH',
      'FETCH_MOVIES',
      'CLEAR_RESULTS'
    ]),
    fetch () {
      this.CLEAR_RESULTS()
      if (this.search.match(new RegExp(/^(tt)\d{7}$/gm))) {
        this.FETCH_MOVIES({ i: this.search })
      } else {
        this.FETCH_MOVIES({ s: this.search, page: 1 })
        this.FETCH_MOVIES({ s: this.search, page: 2 })
      }
    },
    submit () {
      this.fetch()
      this.$router.push({ name: 'List' })
    }
  }
}
</script>
