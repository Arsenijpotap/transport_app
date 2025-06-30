"use client"

import { Bus, BusFront, List, ListCheck, MapPin, Search, Settings2 } from "lucide-react";
import Link from "next/link";
import './TabPanel.scss'

import { usePathname, useRouter } from "next/navigation";
import { memo, MouseEvent } from "react";

const TabPanel= memo( () => {
    const router = useRouter();
    const pathname = usePathname();
    
    const links = [
    
        {
            href: '/',
            child: <BusFront className="tabpanel__image" />
        },
        {
            href: '/stations',
            child: <MapPin className="tabpanel__image" />
        },
        {
            href: '/settings',
            child: <Settings2 className="tabpanel__image" />
        }
    ]
    
        
        ;

    const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        router.push(href);
    }
    return (
        
        <div className="tabpanel">
            <div className="conteiner">



               
                <div className="tabpanel__box">
                <div className={pathname=='/'||pathname.includes('transport')?'tabpanel__marker tabpanel__marker_left':pathname=='/stations'?"tabpanel__marker tabpanel__marker_center":'tabpanel__marker tabpanel__marker_right'}> </div>
                    {links.map((link, index) => (
                        <Link 
                            key={index}
                            onClick={(e) => handleClick(e, link.href)} 
                            href={link.href} 
                            className={pathname === link.href ? 'tabpanel__tab tabpanel__tab_active' : 'tabpanel__tab'}
                        >
                            {link.child}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
})
 
export default TabPanel;      