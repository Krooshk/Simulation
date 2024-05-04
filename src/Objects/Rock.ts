import { Entity } from "../main/entity";
import { ViewEntityType } from "../types/types";

export class Rock extends Entity {
view: ViewEntityType;
name: string;
  constructor() {
    super();
    this.view = "🗿";
	this.name = "Rock";
  }
};
