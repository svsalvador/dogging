/* eslint-disable no-console */
import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({

  session: service(),

  firebaseApp: service(),

  store: service(),

  selected: 0,

  actions: {
    async match(matchedId) {
      try {
        const users = this.store.peekAll('user')
        const user = users.findBy('email', this.session.userEmail);

        const functions = await this.firebaseApp.functions();
        const callable = functions.httpsCallable('match');

        const response = await callable({
          matcher: user.id,
          matched: matchedId
        });

        const matched = users.findBy('id', matchedId);
        matched.set('match', response.data.matched);
      } catch (error) {
        console.log(error);
      }
    }
  }

});
