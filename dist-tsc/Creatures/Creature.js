"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creature = void 0;
const entity_1 = require("../main/entity");
const bfs_1 = require("../utils/bfs");
const herbivore_1 = require("./herbivore");
class Creature extends entity_1.Entity {
    constructor(velocity, healthPoints) {
        super();
        this.velocity = velocity;
        this.healthPoints = healthPoints;
        this.isWalked = false;
    }
    makeMove(position, mapOfTheGame, goalName, power) {
        if (this.isWalked)
            return;
        const pathForGoal = bfs_1.BFS.search(position, mapOfTheGame, goalName);
        let stepLeft = this.velocity;
        if (!pathForGoal)
            return;
        while (stepLeft > 0) {
            // goal is near
            if (pathForGoal.length === 2) {
                const pos = pathForGoal[1];
                if (goalName === "Grass") {
                    mapOfTheGame.removeEntity(pos);
                    this.healthPoints++;
                }
                if (goalName === "Herbivore") {
                    const herbivore = mapOfTheGame.getEntity(pos);
                    if (herbivore instanceof herbivore_1.Herbivore) {
                        if (power > herbivore.healthPoints) {
                            mapOfTheGame.removeEntity(pos);
                            this.healthPoints += herbivore.healthPoints;
                        }
                        else {
                            herbivore.healthPoints -= power;
                            this.healthPoints += power;
                        }
                    }
                }
                stepLeft--;
                continue;
            }
            const difference = pathForGoal.length - 1 - stepLeft;
            const wasted = difference ? stepLeft : pathForGoal.length - 1;
            const pos = pathForGoal[wasted];
            const obj = mapOfTheGame.getEntity(pathForGoal[0]);
            mapOfTheGame.moveEntity(pathForGoal[0], pos, obj);
            pathForGoal.splice(0, wasted);
            stepLeft -= wasted;
        }
        this.isWalked = true;
    }
}
exports.Creature = Creature;
//# sourceMappingURL=creature.js.map