import "./libs/css/globals.css";
import Sidebar from "./components/Sidebar";


export const metadata = {
  title: "Rendy Dwi Proklamanta - Chatbot",
  description: "Hello I'm Rendy Dwi Proklamanta. I'm a Fullstack Developer, DevOps Engineer, IT Support. If you have any idea or project, don't hestitate to contact me and let's make it happen.",
  keywords: "Rendy Dwi Proklamanta, Fullstack Developer, DevOps Engineer, IT Support, SysAdmin, Gamer, React, JS, Vue, HTML, CSS, PWA, Ionic, Capacitor, PHP, MySQL, Docker, Kubernetes, VM, Software"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <div className="flex h-screen bg-gray-800">

          <Sidebar />

          {children}

        </div>

      </body>
    </html>
  );
}
