import EventBus from "./event.js";

const LobbyEvents = {
  currentLevel: 1,   // start at level 1
  levelCount: 0,     // total number of levels

  // Initialize the lobby events system
  init(totalLevels) {
    this.levelCount = totalLevels;

    // Event: move up
    EventBus.on("levelUp", () => {
      if (this.currentLevel < this.levelCount) {
        const oldLevel = this.currentLevel;
        this.currentLevel++;
        EventBus.emit("levelChanged", { oldLevel, newLevel: this.currentLevel });
      }
    });

    // Event: move down
    EventBus.on("levelDown", () => {
      if (this.currentLevel > 1) {
        const oldLevel = this.currentLevel;
        this.currentLevel--;
        EventBus.emit("levelChanged", { oldLevel, newLevel: this.currentLevel });
      }
    });

    // Event: select a specific level directly
    EventBus.on("selectLevel", (levelNumber) => {
      if (levelNumber >= 1 && levelNumber <= this.levelCount && levelNumber !== this.currentLevel) {
        const oldLevel = this.currentLevel;
        this.currentLevel = levelNumber;
        EventBus.emit("levelChanged", { oldLevel, newLevel: this.currentLevel });
      }
    });
  }
};

export default LobbyEvents;
