import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';

export default Route.extend({

  store: service(),

  session: service(),

  model() {
    return this.store.findAll('user').then((users) => {
      return {
        users: users.rejectBy('email', this.session.userEmail)
      }
    });
  }

});
