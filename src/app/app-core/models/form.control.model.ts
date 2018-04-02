export interface FormContract {
    id: string;
    name: string;
    controlType?: string;
    value?: string | string[] | Date | number;
    valueDate?: Date;
    disable?: boolean;
    validations?: Validation[];
}
export interface Validation {
    type: 'required' | 'minlength' | 'maxlength' | 'onlyNumber' | 'onlyAlphabet' | 'pattern' | 'whiteSpace';
    value?: any;
    message?: string;
}
