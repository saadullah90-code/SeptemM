// app/layout.js ya app/page.js me
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
