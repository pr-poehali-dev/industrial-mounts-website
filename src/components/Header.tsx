import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  navLinks: Array<{ href: string; label: string }>;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  handleNavClick: () => void;
}

const Header = ({ navLinks, mobileMenuOpen, setMobileMenuOpen, handleNavClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Factory" size={32} className="text-primary" />
          <span className="text-2xl font-bold">ПромЛожементы</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <a href="#contact">Оставить заявку</a>
        </Button>
        
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="w-full" onClick={handleNavClick}>
                <a href="#contact">Оставить заявку</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
