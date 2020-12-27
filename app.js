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
      return {
        user1: this.input === "user1",
        user2: this.input === "user2",
        visible: this.visibleParagraph,
        hidden: !this.visibleParagraph
      };
    }
  }
});

app.mount("#assignment");
