/* tslint:disable */
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductSegment, ProductCoverage, GeoMapping } from 'app/app-core';

@Injectable()
export class InMemoryWebServiceService implements InMemoryDbService {

  createDb() {
    let layout = this.getLayout();
    let product = this.getProductList();
    let segment = this.getSegment();
    let coverage = this.getCoverage();
    let geomapping = this.getGeoMappingList();
    return { layout, product, segment, coverage, geomapping };
  }

  private getSegment(): ProductSegment {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return {
      productLineId: 1,
      productSegmentId: 1,
      segmentName: '',
      startDate: date.toLocaleDateString(),
      endDate: '',
      segmentDefination: ''
    }
  }

  private getLayout() {
    return {
      component: null,
      input: [
        {
          label: 'Dashboard',
          icon: 'fa-home',
          routerLink: ['/dashboard']
        },
        {
          label: 'Product',
          icon: 'fa-product',
          items: [
            { label: 'View All', routerLink: ['/product'] },
            { label: 'New Product', routerLink: ['/product/create'] }
          ]
        },
        {
          label: 'Customer',
          icon: 'fa-customer',
          routerLink: ['/customer']
        }
      ]
    };
  }

  private getProductList() {
    return { "productHeadline": { "createdBy": "SYSTEM", "createdTs": "14/12/2017 10:35:00 PM", "updatedBy": "SYSTEM", "updatedTs": "14/12/2017 10:35:00 PM", "productHeadlineId": 1, "productHeadlineName": "LMI", "productHeadlineDefination": "LMI" }, "productLine": { "createdBy": "SYSTEM", "createdTs": "14/12/2017 10:36:57 PM", "updatedBy": "SYSTEM", "updatedTs": "14/12/2017 10:36:57 PM", "productLineId": 1, "productHeadlineId": null, "productLineName": "Transactional LMI", "productLineDefination": "Transactional LMI" }, "productSegments": { "result": [{ "createdBy": "SYSTEM", "createdTs": "21/12/2017 11:09:30 AM", "updatedBy": null, "updatedTs": null, "productSegmentId": 147, "productLineId": null, "segmentName": "shailesh Test", "segmentDefination": "fsgnfdng", "startDate": "23/12/2017", "endDate": "29/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "21/12/2017 11:07:28 AM", "updatedBy": null, "updatedTs": null, "productSegmentId": 146, "productLineId": null, "segmentName": "aditya", "segmentDefination": "fdgfdsg", "startDate": "29/12/2017", "endDate": "30/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "21/12/2017 11:05:51 AM", "updatedBy": null, "updatedTs": null, "productSegmentId": 145, "productLineId": null, "segmentName": "gourav", "segmentDefination": "fdssdfs", "startDate": "23/12/2017", "endDate": "29/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 08:43:23 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 144, "productLineId": null, "segmentName": "sfd", "segmentDefination": "sdff", "startDate": "22/12/2017", "endDate": "23/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 08:36:11 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 143, "productLineId": null, "segmentName": "dsaf", "segmentDefination": "sdfsdf", "startDate": "22/12/2017", "endDate": "23/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 08:35:15 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 142, "productLineId": null, "segmentName": "dsf", "segmentDefination": "sdfsdf", "startDate": "22/12/2017", "endDate": "23/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 08:32:58 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 141, "productLineId": null, "segmentName": "dsfds", "segmentDefination": "fdsfsd", "startDate": "22/12/2017", "endDate": "28/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 08:21:25 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 140, "productLineId": null, "segmentName": "nirmal", "segmentDefination": "dsfsdfs", "startDate": "22/12/2017", "endDate": "28/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 08:20:16 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 139, "productLineId": null, "segmentName": "rxjx", "segmentDefination": "ewrwer", "startDate": "29/12/2017", "endDate": "30/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 08:04:22 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 138, "productLineId": null, "segmentName": "shalu", "segmentDefination": "fgdgfdg", "startDate": "22/12/2017", "endDate": "23/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 07:51:13 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 137, "productLineId": null, "segmentName": "shalesh", "segmentDefination": "fdsdfsdf", "startDate": "22/12/2017", "endDate": "28/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 07:12:55 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 136, "productLineId": null, "segmentName": "Testing Update", "segmentDefination": "adasdasd", "startDate": "27/12/2017", "endDate": "28/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 06:18:23 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 131, "productLineId": null, "segmentName": "Test buddy", "segmentDefination": "Testing updated", "startDate": "22/12/2017", "endDate": "30/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 05:29:44 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 130, "productLineId": null, "segmentName": "Gourav5", "segmentDefination": "fdgfdgdf", "startDate": "22/12/2017", "endDate": "28/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 05:28:13 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 129, "productLineId": null, "segmentName": "Indu", "segmentDefination": "sfdsdsf", "startDate": "22/12/2017", "endDate": "23/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 05:24:49 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 128, "productLineId": null, "segmentName": "Gourav1", "segmentDefination": "dfvdsg", "startDate": "22/12/2017", "endDate": "28/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 05:12:55 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 127, "productLineId": null, "segmentName": "fghfd", "segmentDefination": "fghhfgh", "startDate": "22/12/2017", "endDate": "23/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 05:10:25 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 125, "productLineId": null, "segmentName": "aditya", "segmentDefination": "test aditya", "startDate": "23/12/2017", "endDate": "28/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 05:06:15 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 124, "productLineId": null, "segmentName": "Test buddy", "segmentDefination": "Testing", "startDate": "28/12/2017", "endDate": "30/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 04:56:45 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 122, "productLineId": null, "segmentName": "gdffd", "segmentDefination": "dgfdh", "startDate": "22/12/2017", "endDate": "28/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 04:35:31 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 120, "productLineId": null, "segmentName": "4ret", "segmentDefination": "fdghdfh", "startDate": "22/12/2017", "endDate": "23/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 02:59:15 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 119, "productLineId": null, "segmentName": "dfgg", "segmentDefination": "fgfdg", "startDate": "22/12/2017", "endDate": "27/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 01:27:00 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 118, "productLineId": null, "segmentName": "gdfg", "segmentDefination": "fdgfd", "startDate": "23/12/2017", "endDate": "03/01/2018" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 01:21:36 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 117, "productLineId": null, "segmentName": "fdsfg", "segmentDefination": "sdffg", "startDate": "22/12/2017", "endDate": "16/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 01:18:43 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 116, "productLineId": null, "segmentName": "sdf", "segmentDefination": "sdfs", "startDate": "22/12/2017", "endDate": "23/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "20/12/2017 12:34:37 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 111, "productLineId": null, "segmentName": "fgdg", "segmentDefination": "gdfhg", "startDate": "22/12/2017", "endDate": "27/12/2017" }, { "createdBy": "SYSTEM", "createdTs": "19/12/2017 08:57:55 PM", "updatedBy": null, "updatedTs": null, "productSegmentId": 107, "productLineId": null, "segmentName": "wewer", "segmentDefination": "werwer", "startDate": "12/12/2018", "endDate": "12/12/2019" }], "totalCount": 0, "pageSize": 0, "pageNum": 0 }, "coverageOptionDTOs": { "result": [], "totalCount": 0, "pageSize": 0, "pageNum": 0 } }
  }
  private getCoverage(): ProductCoverage {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return {
      coverageId: 1,
      attachmentValue: 22,
      detachmentValue: 12,
      attachmentType: '%',
      detachmentType: '%',
      lmiCoverType: 'Limited Term',
      term: 2,
      insurerShareOfLoss: 2,
      definition: 'sdgfsd',
      segments: ['OO'],
      startDate: date.toLocaleDateString(),
      endDate: ''

    }
  }

  private getGeoMappingList(): GeoMapping[] {
    let geoMapping: GeoMapping[] = [
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneA',
        branchId: 'NBranchA', stateId: 'NStateA',
        supervisorId: 'NSupervisor', marketingHierarchyUser: 'Sumit Roy', SchoolGeoHierarchyMappingViewModels: [{ value: 'Abc' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneB',
        branchId: 'NBranchB', stateId: 'NStateB',
        supervisorId: 'NSupervisorB', marketingHierarchyUser: 'Abhishek', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwerty' }]
      }
      ,
      {
        geoMappingId: 500, countryId: 'Nigeria', zoneId: 'NZoneC',
        branchId: 'NBranchC', stateId: 'NStateC',
        supervisorId: 'NSupervisorC', marketingHierarchyUser: 'Srikant', SchoolGeoHierarchyMappingViewModels: [{ value: 'QwZxcvbnerty' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneD',
        branchId: 'NBranchD', stateId: 'NStateD',
        supervisorId: 'NSupervisorD', marketingHierarchyUser: 'Praveen', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwesgsdgewewrrty' }]
      }, {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneA',
        branchId: 'NBranchA', stateId: 'NStateA',
        supervisorId: 'NSupervisor', marketingHierarchyUser: 'Sumit Roy', SchoolGeoHierarchyMappingViewModels: [{ value: 'Abc' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneB',
        branchId: 'NBranchB', stateId: 'NStateB',
        supervisorId: 'NSupervisorB', marketingHierarchyUser: 'Abhishek', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwerty' }]
      }
      ,
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneC',
        branchId: 'NBranchC', stateId: 'NStateC',
        supervisorId: 'NSupervisorC', marketingHierarchyUser: 'Srikant', SchoolGeoHierarchyMappingViewModels: [{ value: 'QwZxcvbnerty' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneD',
        branchId: 'NBranchD', stateId: 'NStateD',
        supervisorId: 'NSupervisorD', marketingHierarchyUser: 'Praveen', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwesgsdgewewrrty' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneA',
        branchId: 'NBranchA', stateId: 'NStateA',
        supervisorId: 'NSupervisor', marketingHierarchyUser: 'Sumit Roy', SchoolGeoHierarchyMappingViewModels: [{ value: 'Abc' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneB',
        branchId: 'NBranchB', stateId: 'NStateB',
        supervisorId: 'NSupervisorB', marketingHierarchyUser: 'Abhishek', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwerty' }]
      }
      ,
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneC',
        branchId: 'NBranchC', stateId: 'NStateC',
        supervisorId: 'NSupervisorC', marketingHierarchyUser: 'Srikant', SchoolGeoHierarchyMappingViewModels: [{ value: 'QwZxcvbnerty' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneD',
        branchId: 'NBranchD', stateId: 'NStateD',
        supervisorId: 'NSupervisorD', marketingHierarchyUser: 'Praveen', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwesgsdgewewrrty' }]
      }, {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneA',
        branchId: 'NBranchA', stateId: 'NStateA',
        supervisorId: 'NSupervisor', marketingHierarchyUser: 'Sumit Roy', SchoolGeoHierarchyMappingViewModels: [{ value: 'Abc' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneB',
        branchId: 'NBranchB', stateId: 'NStateB',
        supervisorId: 'NSupervisorB', marketingHierarchyUser: 'Abhishek', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwerty' }]
      }
      ,
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneC',
        branchId: 'NBranchC', stateId: 'NStateC',
        supervisorId: 'NSupervisorC', marketingHierarchyUser: 'Srikant', SchoolGeoHierarchyMappingViewModels: [{ value: 'QwZxcvbnerty' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneD',
        branchId: 'NBranchD', stateId: 'NStateD',
        supervisorId: 'NSupervisorD', marketingHierarchyUser: 'Praveen', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwesgsdgewewrrty' }]
      }, {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneA',
        branchId: 'NBranchA', stateId: 'NStateA',
        supervisorId: 'NSupervisor', marketingHierarchyUser: 'Sumit Roy', SchoolGeoHierarchyMappingViewModels: [{ value: 'Abc' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneB',
        branchId: 'NBranchB', stateId: 'NStateB',
        supervisorId: 'NSupervisorB', marketingHierarchyUser: 'Abhishek', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwerty' }]
      }
      ,
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneC',
        branchId: 'NBranchC', stateId: 'NStateC',
        supervisorId: 'NSupervisorC', marketingHierarchyUser: 'Srikant', SchoolGeoHierarchyMappingViewModels: [{ value: 'QwZxcvbnerty' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneD',
        branchId: 'NBranchD', stateId: 'NStateD',
        supervisorId: 'NSupervisorD', marketingHierarchyUser: 'Praveen', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwesgsdgewewrrty' }]
      }, {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneA',
        branchId: 'NBranchA', stateId: 'NStateA',
        supervisorId: 'NSupervisor', marketingHierarchyUser: 'Sumit Roy', SchoolGeoHierarchyMappingViewModels: [{ value: 'Abc' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneB',
        branchId: 'NBranchB', stateId: 'NStateB',
        supervisorId: 'NSupervisorB', marketingHierarchyUser: 'Abhishek', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwerty' }]
      }
      ,
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneC',
        branchId: 'NBranchC', stateId: 'NStateC',
        supervisorId: 'NSupervisorC', marketingHierarchyUser: 'Srikant', SchoolGeoHierarchyMappingViewModels: [{ value: 'QwZxcvbnerty' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneD',
        branchId: 'NBranchD', stateId: 'NStateD',
        supervisorId: 'NSupervisorD', marketingHierarchyUser: 'Praveen', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwesgsdgewewrrty' }]
      }, {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneA',
        branchId: 'NBranchA', stateId: 'NStateA',
        supervisorId: 'NSupervisor', marketingHierarchyUser: 'Sumit Roy', SchoolGeoHierarchyMappingViewModels: [{ value: 'Abc' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneB',
        branchId: 'NBranchB', stateId: 'NStateB',
        supervisorId: 'NSupervisorB', marketingHierarchyUser: 'Abhishek', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwerty' }]
      }
      ,
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneC',
        branchId: 'NBranchC', stateId: 'NStateC',
        supervisorId: 'NSupervisorC', marketingHierarchyUser: 'Srikant', SchoolGeoHierarchyMappingViewModels: [{ value: 'QwZxcvbnerty' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneD',
        branchId: 'NBranchD', stateId: 'NStateD',
        supervisorId: 'NSupervisorD', marketingHierarchyUser: 'Praveen', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwesgsdgewewrrty' }]
      }, {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneA',
        branchId: 'NBranchA', stateId: 'NStateA',
        supervisorId: 'NSupervisor', marketingHierarchyUser: 'Sumit Roy', SchoolGeoHierarchyMappingViewModels: [{ value: 'Abc' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneB',
        branchId: 'NBranchB', stateId: 'NStateB',
        supervisorId: 'NSupervisorB', marketingHierarchyUser: 'Abhishek', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwerty' }]
      }
      ,
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneC',
        branchId: 'NBranchC', stateId: 'NStateC',
        supervisorId: 'NSupervisorC', marketingHierarchyUser: 'Srikant', SchoolGeoHierarchyMappingViewModels: [{ value: 'QwZxcvbnerty' }]
      },
      {
        geoMappingId:1, countryId: 'Nigeria', zoneId: 'NZoneD',
        branchId: 'NBranchD', stateId: 'NStateD',
        supervisorId: 'NSupervisorD', marketingHierarchyUser: 'Praveen', SchoolGeoHierarchyMappingViewModels: [{ value: 'Qwesgsdgewewrrty' }]
      }
    ]
    let count: number = 99;
    geoMapping.forEach((item) => {
      item.geoMappingId = count + 1;
      count++;
    })
    return geoMapping;
  }
}

