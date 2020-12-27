const app = Vue.createApp({
  data() {
    return {
      input: "",
      visibleParagraph: true
    };
  },
  methods: {
    setInput(e) {
      this.input = e.target.value;
    },
    toggle() {
      this.visibleParagraph = !this.visibleParagraph;
    }
  },
  computed: {
    paragraphStyle() {
      if (this.input === "user1") {
        return "user1";
      } else if (this.input === "user2") {
        return "user2";
      } else if (this.visibleParagraph) {
        return "visible";
      } else if (!this.visibleParagraph) {
        return "hidden";
      }
    }
  }
});

app.mount("#assignment");
