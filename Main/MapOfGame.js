import { Entity } from "../Entity.js";

export class MapOfGame extends Entity {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    this.map = []; // array in JS - vector so i mean, that length of array equal (width * height)
  }
}
