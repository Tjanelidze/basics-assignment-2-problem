const app = Vue.createApp({
  data() {
    return {
      userName: '',
      confirmedUser: '',
    };
  },

  methods: {
    showAlert() {
      alert('hi');
    },

    registerUser(event) {
      this.userName = event.target.value;
    },

    confirmUser() {
      this.confirmedUser = this.userName;
    },
  },
});

app.mount('#assignment');
