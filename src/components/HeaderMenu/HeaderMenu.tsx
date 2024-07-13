import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styles from './header_menu.module.scss';

const HeaderMenu = () => {
  return (
    <NavigationMenu.Root orientation="horizontal" className={styles.navigationMenuRoot}>
      <NavigationMenu.List className={styles.navigationMenuList}>
        <NavigationMenu.Item className={styles.NavigationMenuItem}>
          <NavigationMenu.Trigger className={styles.NavigationMenuTrigger}>Pokemons</NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.NavigationMenuContent}>
            <NavigationMenu.Link className={styles.NavigationMenuLink} href="/pokemons">See all Pokemons</NavigationMenu.Link>
            <NavigationMenu.Link className={styles.NavigationMenuLink} href="/pokemons/gen-1">See 1 Gen pokemons</NavigationMenu.Link>
            <NavigationMenu.Link className={styles.NavigationMenuLink} href="/pokemons/gen-2">See 2 Gen Pokemon</NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className={styles.NavigationMenuItem}>
          <NavigationMenu.Trigger className={styles.NavigationMenuTrigger}>Skills</NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.NavigationMenuContent}>Item Two content</NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default HeaderMenu;
