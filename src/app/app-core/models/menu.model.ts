export interface MenuConfig {
    menuItems: MenuItem[];
    showMenu: boolean;
}
export interface MenuItem {
    menuId: number;
    menuName: string;
    menuLink?: string;
    isSubMenu?: boolean;
    subMenus?: subMenuItem[];
}

export interface subMenuItem {
    subMenuId: number;
    subMenuName: string;
    subMenuLink: string;
}