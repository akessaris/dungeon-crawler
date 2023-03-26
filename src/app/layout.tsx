import { ReactNode } from "react";
import classes from "./layout.module.scss";

export const metadata = {
  title: "Dungeon crawler",
  description: "Trying out web-dev concepts in a game",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={classes.darkMode}>{children}</body>
    </html>
  );
}
