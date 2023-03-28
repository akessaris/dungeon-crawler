import { FC } from "react";

export const StatusBoard: FC<{
  stage: string;
}> = ({ stage }) => (
  <div>
    <h2>Status</h2>
    <h3>Stage: {stage}</h3>
  </div>
);
