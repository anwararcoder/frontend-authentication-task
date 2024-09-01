import { ContextAuthProvider } from "@/context/ContextAuth";
import "./../styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Frontend Authentication Task",
  description: "Frontend Authentication Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" reverseOrder={false} />
        <ContextAuthProvider>{children}</ContextAuthProvider>
      </body>
    </html>
  );
}
