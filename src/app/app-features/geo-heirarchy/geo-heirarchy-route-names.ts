interface IRoute {
    routeName: string;
}
interface RouteName {
    default: IRoute;
    geoheirarchyCreate: IRoute;
    geoheirarchyEdit: IRoute;
}
// tslint:disable-next-line:variable-name
export const GeoHeirarchyRouteConfig: RouteName = {
    default: { routeName: '' },
    geoheirarchyCreate: { routeName: 'create' },
    geoheirarchyEdit: { routeName: 'edit' }
};


