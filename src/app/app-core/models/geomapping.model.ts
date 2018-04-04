import { SelectItem } from 'primeng/api';
export interface GeoMapping {
    geoMappingId?: number;
    country?: string;
    zone?: string;
    branch?: string;
    state?: string;
    supervisor?: string;
    marketingUser?: string;
    schools?: SelectItem[];
}
