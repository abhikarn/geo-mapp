export interface Product {
    productHeadline: ProductHeadLine;
    productLine: ProductLine;
    productSegments: ProductSegmentResult;
}
export interface ProductHeadLine {
    productHeadlineId: number;
    productHeadlineName: string;
    productHeadlineDefination: string;
}
export interface ProductLine {
    productLineId: number;
    productLineName: string;
    productLineDefination: string;
}

export interface ProductSegment {
    productSegmentId?: number;
    productLineId?: number;
    segmentName: string;
    startDate: string;
    endDate?: string;
    segmentDefination?: string;
    updatedTs?: string;
}

export interface ProductSegmentResult {
    pageNum: number;
    pageSize: number;
    result: Array<ProductSegment>;
}

export interface ProductCoverage {
    coverageId: number;
    attachmentValue: number;
    detachmentValue: number;
    attachmentType: string;
    detachmentType: string;
    segments: string[];
    lmiCoverType: string;
    term: number;
    insurerShareOfLoss: number;
    startDate: string;
    endDate?: string;
    definition: string;
}

