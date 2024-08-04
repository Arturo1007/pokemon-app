import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styles from './header_menu.module.scss';
import {Link} from 'react-router-dom';
 
interface NavigationMenuLinkProps {
  href: string
  children: React.ReactNode;
}

const NavigationMenuLink = ({ href, children, ...props } : NavigationMenuLinkProps) => {
  return (
    <NavigationMenu.Link asChild>
      <Link to={href} {...props} className={styles.NavigationMenuLink}>{children}</Link>
    </NavigationMenu.Link>
  );
}

const HeaderMenu = () => {
  return (
    <NavigationMenu.Root orientation="horizontal" className={styles.navigationMenuRoot}>
      <NavigationMenu.List className={styles.navigationMenuList}>
        <NavigationMenu.Item className={styles.NavigationMenuItem}>
          <NavigationMenuLink href="/">Pokemons</NavigationMenuLink>
        </NavigationMenu.Item>
        <NavigationMenu.Item className={styles.NavigationMenuItem}>
          <Link to="/skills" className={styles.NavigationMenuLink}>Skills</Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default HeaderMenu;
