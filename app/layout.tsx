import type { PropsWithChildren } from "react";

export const metadata = {
  title: "Supercharged Next.js App",
  description: "Generated from supercharged Next.js template.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>{children}</body>
    </html>
  );
}
