import React from 'react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Nav } from '@/types';

interface MobileNavProps {
    navs: Nav[];
}

const MobileNav: React.FC<MobileNavProps> = ({
    navs
}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleLinkClick = (href: string) => {
        setIsOpen(false);
        setTimeout(() => {
            window.location.href = href;
        }, 300); // Adjust the timeout as needed
    };

    return (
        <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <button aria-label="Open Menu" className="p-4 relative">
                        <Menu size={24} className='text-white'/>
                        <span className="absolute inset-0" />
                    </button>
                </SheetTrigger>
                <SheetContent>
                    <nav>
                        <ul className='gap-4 flex flex-col'>
                            {navs.map(item => (
                                <li key={item.name}>
                                    <a href="#" onClick={() => handleLinkClick(item.link)}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;