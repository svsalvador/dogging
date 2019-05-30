/* eslint-disable no-console */
import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({

  firebaseApp: service(),

  router: service(),

  session: service(),

  email: undefined,

  password: undefined,

  actions: {
    async login() {
      const email = this.email;
      const password = this.password;

      try {

        const auth = await this.firebaseApp.auth();

        await auth.signInWithEmailAndPassword(email, password);

        this.session.set('userEmail', email);

        this.router.transitionTo('inside');

      } catch (error) {
        console.log(error.message);
      }
    }
  }
});
