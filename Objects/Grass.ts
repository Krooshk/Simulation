import { Entity } from "../Main/Entity";
import { ViewEntityType } from "../types/types";

export class Grass extends Entity {
  view: ViewEntityType;
  constructor() {
    super();
    this.view = "🌿";
  }
};
