import { ReactNode } from "react";

export const metadata = {
  title: "Dungeon crawler",
  description: "Trying out web-dev concepts in a game",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
