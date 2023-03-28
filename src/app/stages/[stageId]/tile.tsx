import { FC } from "react";
import classes from "./tile.module.scss";

type TileProps = {
  color: "grey" | "green" | "blue" | "red";
};

export const Tile: FC<TileProps> = ({ color = "grey" }) => (
  <div className={classes.tile} style={{ backgroundColor: color }} />
);
