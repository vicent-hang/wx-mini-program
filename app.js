// app.js
import { userStore } from './store/store';

App({
  onLaunch() {
    this.userStore = userStore;

    
  }
});
