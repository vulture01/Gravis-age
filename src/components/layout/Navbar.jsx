import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { navLinks } from "../../data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Solid background + shadow once the page has scrolled a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open; close on Escape.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      firstLinkRef.current?.focus();
      const onKey = (e) => {
        if (e.key === "Escape") {
          setOpen(false);
          toggleRef.current?.focus();
        }
      };
      window.addEventListener("keydown", onKey);
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-white" : "text-gray-300 hover:text-white"
    } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-lime-500 after:transition-all after:duration-300 after:ease-premium ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-premium ${
        scrolled
          ? "bg-navy-800/90 backdrop-blur-md shadow-soft"
          : "bg-navy-800/0"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Container className="flex h-20 items-center justify-between">
        <Logo className="h-9 w-auto sm:h-10" />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === "/"} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" size="md">
            Grow your brand
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile menu — full-screen takeover so nothing behind it shows through */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col overflow-y-auto border-t border-line bg-navy-800 lg:hidden transition-all duration-300 ease-premium ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <Container className="flex flex-1 flex-col gap-1 py-8">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              ref={i === 0 ? firstLinkRef : undefined}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-4 text-lg font-medium transition-colors ${
                  isActive ? "bg-lime-500/10 text-lime-500" : "text-gray-300 hover:bg-navy-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-6 px-4">
            <Button to="/contact" className="w-full" onClick={() => setOpen(false)}>
              Grow your brand
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
