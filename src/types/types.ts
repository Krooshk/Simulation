import { MovementOfCreatures } from "../Actions/MovementOfCreatures";
import { AddGrass } from "../Actions/AddGrass";
import { AddHerbivores } from "../Actions/AddHerbivores";

export type ViewEntityType = "🐄" | "🐺" | "🌿" | "🗿" | "🌳" ;
export type TurnActionsType = MovementOfCreatures | AddGrass | AddHerbivores;