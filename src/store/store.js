import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/eventService.js';
import * as user from '@/store/modules/user.js';
import * as event from '@/store/modules/event.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    event
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  }
});
