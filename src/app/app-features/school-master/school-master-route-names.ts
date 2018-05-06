interface IRoute {
    routeName: string;
}
interface RouteName {
    default: IRoute;
    schoolMasterCreate: IRoute;
    schoolMasterEdit: IRoute;
}
// tslint:disable-next-line:variable-name
export const SchoolMasterRouteConfig: RouteName = {
    default: { routeName: '' },
    schoolMasterCreate: { routeName: 'create' },
    schoolMasterEdit: { routeName: 'edit' }
};


