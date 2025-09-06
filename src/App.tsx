import { useState } from "react";
import { Homepage } from "./components/Homepage";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  const [showHomepage, setShowHomepage] = useState(true);


  const handleEnterApp = () => {
    setShowHomepage(false);
  };

  // Show homepage if showHomepage is true
  if (showHomepage) {
    return (
      <ThemeProvider defaultTheme="system" storageKey="sphererx-ui-theme">
        <Homepage onEnterApp={handleEnterApp} />
      </ThemeProvider>
    );
  }
}