import Grid from "./grid";
import { StatusBoard } from "./status-board";

const Stage = ({
  params: { stageId = "unknown" },
}: {
  params: { stageId: string };
}) => (
  <>
    <Grid />
    <StatusBoard stage={stageId} />
  </>
);

export default Stage;
