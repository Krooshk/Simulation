import { Creature } from "./Creature.js";

export class Predator extends Creature {
  constructor(velocity, healthPoints, power) {
    super(velocity, healthPoints);
    this.power = power;
    this.view = "🐺";
  }
  makeMove() {
    // Переместиться (чтобы приблизиться к жертве - травоядному)
    // Атаковать травоядное. При этом количество HP травоядного
    // уменьшается на силу атаки хищника. Если значение HP жертвы опускается до 0, травоядное исчезает
  }
}
