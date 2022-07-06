const app = Vue.createApp({
  data() {
    return {
      preSeasonGames: "Team preperation",
      trainingLink:
        "https://twitter.com/search?q=manchester+united+training&ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Esearch/",
      teamGoala: "First Team",
      teamGoalb: "Reserve Team",
      teamGoalc: "Sell Team",
    };
  },
  methods: {
    getPreSeasonGames() {
      // random number between 1 and 10
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      if (randomNumber > 30 && randomNumber < 60) {
        return this.teamGoalb;
        // this.preSeasonGames = "Sell Player ";
      } else if (randomNumber > 0 && randomNumber < 30) {
        return this.teamGoalc;
        // this.preSeasonGames = "Team training";
      } else if (randomNumber > 60 && randomNumber < 100) {
        return this.teamGoala;
      }
    },
  },
});
app.mount("#user-goal");
