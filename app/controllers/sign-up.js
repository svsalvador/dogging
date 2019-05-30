/* eslint-disable no-console */
import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({

  firebaseApp: service(),

  store: service(),

  session: service(),

  router: service(),

  email: undefined,

  password: undefined,

  dogName: undefined,

  dogDescription: undefined,

  actions: {

    async createUser() {
      const name = this.name;
      const email = this.email;
      const password = this.password;
      const dogName = this.dogName;
      const dogDescription = this.dogDescription;
      const file = document.getElementById('dog-pic').files[0];
      const picRef = `images/${dogName}/${file.name}`;

      try {

        const auth = await this.firebaseApp.auth();

        await auth.createUserWithEmailAndPassword(email, password);

        const storage = await this.firebaseApp.storage();

        const storageRef = storage.ref(picRef);

        await storageRef.put(file);

        const user = this.store.createRecord('user', {
          name,
          email,
          dogName,
          dogDescription,
          picRef
        });

        await user.save();

        const match = this.store.createRecord('match', {
          id: user.id,
          list: []
        });

        await match.save();

        this.session.set('userEmail', email);

        this.router.transitionTo('sign-up-complete');

      } catch (error) {
        console.log(error.message);
      }

    }
  }
});
