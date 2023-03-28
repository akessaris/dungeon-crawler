import { Tile } from "./tile";

export const useMatrix = ({
  width,
  height,
  exitIndex,
  playerIndex,
}: {
  width: number;
  height: number;
  exitIndex: number;
  playerIndex: number;
}) => {
  // TODO: randomize
  const enemyIndices = [60];
  const enemyIndicesSet = new Set(enemyIndices);

  const getColor = (idx: number) => {
    if (enemyIndicesSet.has(idx)) return "red";
    switch (idx) {
      case exitIndex:
        return "green";
      case playerIndex:
        return "blue";
      default:
        return "grey";
    }
  };

  return Array.from({ length: height }, (_, yIndex) =>
    Array.from({ length: width }, (__, xIndex) => {
      const key = yIndex * width + xIndex;
      return <Tile key={key} color={getColor(key)} />;
    })
  );
};
