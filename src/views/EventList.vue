<template>
  <div>
    <h1>Event List</h1>

    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
    <template v-if="page != 1">
      <router-link :to="{ name: 'event-list', query: {page: page - 1}}">Prev</router-link>
    </template>
    <router-link
      :to="{ name: 'event-list', query: {page: page + 1}}"
      rel="next"
    >Next</router-link>

  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    EventCard
  },
  data() {
    return {
      event: {}
    };
  },
  created() {
    this.$store.dispatch("fetchEvents", {
      perPage: 4,
      page: this.page
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(["events"])
  }
};
</script>

<style scoped>
</style>