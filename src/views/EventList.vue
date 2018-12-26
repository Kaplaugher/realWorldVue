<template>
  <div>
    <h1>Event List</h1>

    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
    {{ event }}
    <BaseIcon />

  </div>
</template>

<script>
import EventService from "@/services/eventService.js";
import EventCard from "../components/EventCard.vue";
export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    EventService.getEvents()
      .then(res => {
        this.events = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
</style>