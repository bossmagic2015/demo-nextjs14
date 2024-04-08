import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "MyApp",
  description: "MyApp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
