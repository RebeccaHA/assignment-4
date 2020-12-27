const app = Vue.createApp({
  data() {
    return {
      input: ""
    };
  },
  methods: {
    setInput(e) {
      this.input = e.target.value;
    }
  },
  computed: {
    paragraphStyle() {
      if (this.input === "user1") {
        return "user1";
      } else if (this.input === "user2") {
        return "user2";
      }
    }
  }
});

app.mount("#assignment");
