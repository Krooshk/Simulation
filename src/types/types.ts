import { MovementOfCreatures } from "../Actions/MovementOfCreatures";
import { AddGrass } from "../Actions/AddGrass";
import { AddHerbivores } from "../Actions/AddHerbivores";

export type ViewEntityType = "🐄" | "🐺" | "🌿" | "🗿" | "🌳" ;
export type TurnActionsType = typeof MovementOfCreatures | typeof AddGrass | typeof AddHerbivores;