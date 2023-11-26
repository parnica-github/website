import classNames from 'classnames';
import { useEffect } from 'react';

import { NavItem } from './NavItem';

interface DrawerProps {
  opened: boolean;
}

export function Drawer({ opened }: DrawerProps) {
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [opened]);

  return (
    <aside
      className={classNames(
        'fixed right-0 top-24 z-50 flex h-screen w-screen flex-col gap-5 px-5 pt-5 transition-transform duration-200 ease-in-out lg:hidden',
        'bg-white',
        {
          'translate-x-0 transform': opened,
          'translate-x-full transform': !opened,
        }
      )}
    >
      <NavItem label="Home Page" href="/" isScrolled />
      <NavItem
        label="Corporate"
        href="/corporate"
        menu={[
          { label: 'About Us', href: '/about' },
          { label: 'Career', href: '/career' },
          { label: 'KVKK', href: '/kvkk' },
        ]}
        isScrolled
      />
      <NavItem label="Partnership" href="/partnership" isScrolled />
      <NavItem label="Products" href="/products" isScrolled />
      <NavItem label="Contact" href="/contact" isScrolled />
    </aside>
  );
}
