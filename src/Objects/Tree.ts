import { Entity }  from "../Main/Entity";
import { ViewEntityType } from "../types/types";

export class Tree extends Entity {
  view: ViewEntityType;
  name: string;
  constructor() {
    super();
    this.view = "🌳";
	this.name = "Tree";
  }
};
