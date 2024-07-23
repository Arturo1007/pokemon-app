import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styles from './header_menu.module.scss';

const HeaderMenu = () => {
  return (
    <NavigationMenu.Root orientation="horizontal" className={styles.navigationMenuRoot}>
      <NavigationMenu.List className={styles.navigationMenuList}>
        <NavigationMenu.Item className={styles.NavigationMenuItem}>
          <NavigationMenu.Trigger className={styles.NavigationMenuTrigger}>Pokemons</NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.NavigationMenuContent}>
            <NavigationMenu.Link className={styles.NavigationMenuLink} href="/pokemons">Gen 1</NavigationMenu.Link>
            <NavigationMenu.Link className={styles.NavigationMenuLink} href="/pokemons/first-gen">Gen 2</NavigationMenu.Link>
            <NavigationMenu.Link className={styles.NavigationMenuLink} href="/pokemons/second-gen">Gen 3</NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className={styles.NavigationMenuItem}>
          <NavigationMenu.Trigger className={styles.NavigationMenuTrigger}>Skills</NavigationMenu.Trigger>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default HeaderMenu;
