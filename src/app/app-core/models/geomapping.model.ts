import { SelectItem } from 'primeng/api';
export interface GeoMapping {
    geoMappingId?: number;
    countryId?: number;
    countryName?: string;
    zoneId?: number;
    zoneName?: string;
    branchId?: number;
    branchName?: string;
    stateId?: number;
    stateName?: string;
    supervisorId?: number;
    supervisorName?: string;
    marketingHierarchyUser?: string;
    schoolGeoHierarchyMappingViewModels?: SelectItem[];
}
