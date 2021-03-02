# Delta Chase leaderboards

This project is a leaderboard mod for the game [Delta Chase](https://helperwesley.itch.io/deltachase) by [HelperWesley](https://twitter.com/HelperWesley).

### The mod

The mod is a [gdmod](https://github.com/arthuro555/gdmod) mod. It starts a timer in game scenes, to track time spent in that scene, and when on the win scene, it posts the time spent in the game scene to a firebase cloud firestore database.

### The website

The website is made with [CRA](https://create-react-app.dev/). It fetches the scores from the firebase cloud firestore database and displays them in a table. Most of the styles come from [bulma](https://bulma.io/).
