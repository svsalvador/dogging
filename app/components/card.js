/* eslint-disable ember/no-observers */
import Component from '@ember/component';
import {
  inject as service
} from '@ember/service';

export default Component.extend({

  firebaseApp: service(),

  async didReceiveAttrs() {
    this._super(...arguments);

    const storage = await this.firebaseApp.storage();
    const picUrl = await storage.ref(this.user.picRef).getDownloadURL();

    this.set('picUrl', picUrl);
  },

  actions: {
    likeIt() {
      this.match(this.user.id);
    }
  }
});
