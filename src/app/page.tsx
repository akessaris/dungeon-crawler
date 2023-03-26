"use client";

import { useRouter } from "next/navigation";
import { stageRoute } from "./stages/route";

export default function Home() {
  const router = useRouter();

  // TODO: replace with actual id
  const goToStage = () => router.push(stageRoute("foo"));

  return (
    <>
      <h1>Dungeon Crawler</h1>
      <button type="button" onClick={() => goToStage()}>
        Continue
      </button>
    </>
  );
}
