firebase.initializeApp({
  apiKey: "AIzaSyCkrAg7caZtjDXw7iJygaSacOYQKK1jX8E",
  authDomain: "deltachase-leaderboards.firebaseapp.com",
  projectId: "deltachase-leaderboards",
  storageBucket: "deltachase-leaderboards.appspot.com",
  messagingSenderId: "72712807157",
  appId: "1:72712807157:web:d8bab8a889550b7bce9bbc",
});
const db = firebase.firestore().collection("scores");

const notyf = new Notyf();

/**
 * Delta chase leaderboard mod.
 * @extends {GDAPI.Mod}
 */
class DeltaChaseMod extends GDAPI.Mod {
  _skip = false;
  _timeSpentInLastScene = 0;
  username;

  constructor() {
    super();

    GDAPI.Callbacks.registerCallback(
      GDAPI.Callbacks.CALLBACKS.SCENE_UNLOADING,
      this.onSceneUnloading
    );
    this.username = localStorage.getItem("__DeltaChase_UserName");
  }

  _checkUserName() {
    if (this.username === null)
      this.username = prompt(
        "Please enter the name for the Delta Chase leaderboard.",
        "__xXx_NoobKid69_xXx__"
      );
    else localStorage.setItem("__DeltaChase_UserName", this.username);
  }

  unload() {
    delete window["firebase"];
    GDAPI.Callbacks.unregisterCallback(
      GDAPI.Callbacks.CALLBACKS.SCENE_UNLOADING,
      this.onSceneUnloading
    );
  }

  preEvent(/** @type {gdjs.RuntimeScene} */ runtimeScene) {
    this._checkUserName();
    if (this._skip) {
      this._skip = false;
      return;
    }

    if (
      runtimeScene.getName() === "Win Screen" &&
      runtimeScene.getOnceTriggers().triggerOnce("showLeaderboard") &&
      this._timeSpentInLastScene > 10
    ) {
      db.add({
        time: this._timeSpentInLastScene,
        name: this.username,
      })
        .then(() => notyf.success("Score submitted!"))
        .catch(() => notyf.error("Score could not be submitted :/"));
    }
  }

  sceneChanged(runtimeScene) {
    // Skip one frame after scene switch to let the variables be refreshed by events
    this._skip = true;
    // Delay to end of frame as the time manager is reset after callbacks are called
    setTimeout(() =>
      gdjs.evtTools.runtimeScene.resetTimer(
        runtimeScene,
        "__DeltaChaseLeaderboardMod"
      )
    );
  }

  _onSceneUnloading(runtimeScene) {
    if (
      runtimeScene &&
      runtimeScene.getTimeManager().hasTimer("__DeltaChaseLeaderboardMod")
    )
      this._timeSpentInLastScene =
        Math.round(
          runtimeScene
            .getTimeManager()
            .getTimer("__DeltaChaseLeaderboardMod")
            .getTime() / 10
        ) / 100;
  }
  onSceneUnloading = this._onSceneUnloading.bind(this);
}

return DeltaChaseMod;
