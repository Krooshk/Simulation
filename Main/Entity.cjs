module.exports = class Entity {
  constructor() {
    if (this.constructor == Entity) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }
};
