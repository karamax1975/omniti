import "./globals.scss";

export const metadata = {
  title: "OMNITI",
  description: "агентство диджитал рекламы omniti",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
