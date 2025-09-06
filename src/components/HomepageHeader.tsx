import { useState } from "react";
import { Button } from "./ui/button";
import { JoinModal } from "./JoinModal";
import { Menu, X } from "lucide-react";
import { LogoWithCaption } from "./ui/logo";

interface HomepageHeaderProps {
  onEnterApp: () => void;
}

export function HomepageHeader({ onEnterApp }: HomepageHeaderProps) {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleJoinSuccess = () => {
    // After successful registration, enter the app
    onEnterApp();
  };

  const navigationItems = [
    { label: "Features", href: "#features" },
    { label: "Specialties", href: "#specialties" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <LogoWithCaption></LogoWithCaption>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* <Button
                variant="ghost"
                onClick={onEnterApp}
                className="text-gray-600 hover:text-green-600"
              >
                Sign In
              </Button> */}
              <Button
                onClick={() => setShowJoinModal(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-6"
              >
                Join Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium px-2 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                  {/* <Button
                    variant="ghost"
                    onClick={() => {
                      onEnterApp();
                      setMobileMenuOpen(false);
                    }}
                    className="justify-start text-gray-600 hover:text-green-600"
                  >
                    Sign In
                  </Button> */}
                  <Button
                    onClick={() => {
                      setShowJoinModal(true);
                      setMobileMenuOpen(false);
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Join Now
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Join Modal */}
      <JoinModal
        isOpen={showJoinModal}
        onClose={() => setShowJoinModal(false)}
        onSuccess={handleJoinSuccess}
      />
    </>
  );
}