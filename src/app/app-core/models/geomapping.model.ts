import { SelectItem } from 'primeng/api';
export interface GeoMapping {
    id?: number;
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
    marketingHierarchyUserId?: number;
    marketingHierarchyUserName?: string;
    schoolGeoHierarchyMappingViewModels?: SelectItem[];
}
