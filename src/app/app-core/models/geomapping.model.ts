import { SelectItem } from 'primeng/api';
export interface GeoMapping {
    geoMappingId?: number;
    countryId?: number|string;
    zoneId?: number|string;
    branchId?: number|string;
    stateId?: number|string;
    supervisorId?: number|string;
    marketingHierarchyUser?: string;
    SchoolGeoHierarchyMappingViewModels?: SelectItem[];
}
