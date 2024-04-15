import { EntitiesType } from "../Actions/ArrangeAllObjects";

export class MapOfTheGame {
  width: number;
  height: number;
  size: number;
  map: Map<string, EntitiesType>;
  quantity: Record<string, number>;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.size = width * height;
    this.map = new Map();
    this.quantity = { Herbivore: 0, Predator: 0, Grass: 0, Rock: 0, Tree: 0 };
  }

  addEntity(pos: string, obj: EntitiesType) {
    this.map.set(pos, obj);
    this.incQuantity(obj);
  }

  removeEntity(pos: string) {
    this.decQuantity(pos);
    this.map.delete(pos);
  }

  getEntity(pos: string) {
    return this.map.get(pos);
  }

  moveEntity(from: string, to: string, obj: EntitiesType) {
    this.removeEntity(from);
    this.addEntity(to, obj);
  }

  incQuantity(obj: EntitiesType) {
    const { name } = obj;
    this.quantity[name] = this.quantity[name] + 1;
  }

  decQuantity(pos: string) {
    const { name } = this.getEntity(pos);
    this.quantity[name] = this.quantity[name] - 1;
  }

  getQuantity(name: string) {
    return this.quantity[name];
  }
}
