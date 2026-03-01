type NavLinks = {
    href: string;
    label: string;
};
export const links: NavLinks[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/favorites', label: 'Favorites' },
    { href: '/cart', label: 'Cart' },
    { href: '/orders', label: 'Orders' },
    { href: '/admin/sales', label: 'Dashboard' },
];

export const adminLinks: NavLinks[] = [
    { href: '/admin/sales', label: 'sales' },
    { href: '/admin/products', label: 'Products' },
    { href: '/admin/products/create', label: 'create product' },
];