export interface UserMaster {
    userMasterId: number;
    userName?: string;
    emailId?: string;
    userPassword?: string;
    isActive?: boolean;
    lastLoginDate?: Date;
    firstName?: string;
    lastName?: string;
    roleId?: number;
    roleName?: string;
    status?: string;
    countryId?: number;
    countryName?: string;
    stateId?: number;
    stateName?: string;
    zoneId?: number;
    zoneName?: string;
    branchId?: number;
    branchName?: string;
    cityId?: number;
    cityName?: string;
    authToken?: string;
}
