import { Entity } from "../Main/Entity";
import { ViewEntityType } from "../types/types";

export class Grass extends Entity {
  view: ViewEntityType;
  name: string;
  constructor() {
    super();
    this.view = "🌿";
	this.name = "Grass";
  }
};
