import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface NavDropdownItem {
  title: string;
  href: string;
}

interface NavDropdownProps {
  title: string;
  items: NavDropdownItem[];
}

const GeometricIcons = {
  "Custom software development": () => (
    // 2x2 yellow/black checkerboard
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect width="32" height="32" x="0" y="0" fill="#FFEB3B" />
      <rect width="32" height="32" x="32" y="0" fill="black" />
      <rect width="32" height="32" x="0" y="32" fill="black" />
      <rect width="32" height="32" x="32" y="32" fill="#FFEB3B" />
      <rect width="16" height="16" x="16" y="16" fill="black" />
      <rect width="16" height="16" x="32" y="32" fill="black" />
    </svg>
  ),
  "DevOps and Migrations": () => (
    // L shape
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" fill="#FFEB3B" />
      <polygon points="0,0 64,0 64,16 16,16 16,64 0,64" fill="black" />
    </svg>
  ),
  "Software testing and QA": () => (
    // 'Corner' shape
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" fill="#FFEB3B" />
      <rect width="32" height="32" x="32" y="32" fill="black" />
      <rect width="16" height="16" x="16" y="16" fill="black" />
    </svg>
  ),
  "Consulting": () => (
    // Curved geometric S
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" fill="#FFEB3B" />
      <path d="M0,0 Q32,32 64,0 Q32,32 64,64 Q32,32 0,64 Q32,32 0,0" fill="black" />
    </svg>
  ),
  "Building digital products end-to-end": () => (
    // 3x3 grid with black corners and center
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" fill="#FFEB3B" />
      <rect width="16" height="16" x="0" y="0" fill="black" />
      <rect width="16" height="16" x="48" y="0" fill="black" />
      <rect width="16" height="16" x="0" y="48" fill="black" />
      <rect width="16" height="16" x="48" y="48" fill="black" />
      <rect width="16" height="16" x="24" y="24" fill="black" />
    </svg>
  ),
};

export default function NavDropdown({ title, items }: NavDropdownProps) {
  return (
    <div className="relative group">
      <button className="flex items-center text-sm font-medium text-white hover:text-yellow-400 transition-colors">
        {title}
        <ChevronDown className="ml-1 w-4 h-4" />
      </button>
      <div className="fixed left-0 top-[50px] w-full bg-black/95 backdrop-blur-sm border-t border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
        <div className="flex items-stretch justify-center max-w-7xl mx-auto px-6 py-8 gap-0">
          {items.map((item, idx) => {
            const IconComponent = GeometricIcons[item.title as keyof typeof GeometricIcons];
            return (
              <div
                key={item.title}
                className={`flex-1 min-w-[200px] max-w-[240px] flex flex-col p-6 bg-black border-r border-white/10 last:border-none`}
                style={{ height: 250 }}
              >
                <Link href={item.href} className="flex flex-col h-full">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-sm bg-yellow-400 flex items-center justify-center">
                      {IconComponent ? <IconComponent /> : null}
                    </div>
                  </div>
                  <span className="text-white text-left text-base font-medium leading-tight mb-auto">
                    {item.title}
                  </span>
                  <div className="mt-8 flex items-end justify-end">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M7 16L13 11L7 6" stroke="#FFEB3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}