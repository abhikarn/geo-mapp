export interface MenuConfig {
    menuItems: MenuItem[];
    showMenu: boolean;
    showProfile: boolean;
}
export interface MenuItem {
    menuId: number;
    menuName: string;
    menuLink?: string;
    isSubMenu?: boolean;
    subMenus?: SubMenuItem[];
}

export interface SubMenuItem {
    subMenuId: number;
    subMenuName: string;
    subMenuLink: string;
}
