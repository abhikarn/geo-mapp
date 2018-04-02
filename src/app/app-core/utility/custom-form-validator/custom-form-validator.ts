import {
    Validators,
    ValidatorFn, FormControl
} from '@angular/forms';
import { Validation } from '../../models/form.control.model';
export class CustomValidators {

    static onlyNumberValidator() {
        return (control: FormControl) => {
            const value: string = control.value || '';
            const valid = value.match(/^[0-9]+$/);
            return valid ? null : { onlyNumber: true };
        };
    }
    static whiteSpaceValidator() {
        return (control: FormControl) => {
            const isWhitespace = (control.value || '').trim().length === 0;
            const isValid = !isWhitespace;
            return isValid ? null : { whiteSpace: true };
        };
    }
    /* This method sets all required validation comming from service to FormGroup  */
    static setValidators(control: Validation[]): ValidatorFn[] {
        {
            const validatorFns: ValidatorFn[] = [];
            if (control) {
                control.forEach(item => {
                    switch (item.type) {
                        case 'required':
                            validatorFns.push(Validators.required);
                            break;
                        case 'minlength':
                            validatorFns.push(Validators.minLength(+item.value));
                            break;
                        case 'maxlength':
                            validatorFns.push(Validators.maxLength(+item.value));
                            break;
                        case 'onlyNumber':
                            validatorFns.push(CustomValidators.onlyNumberValidator());
                            break;
                        case 'whiteSpace':
                            validatorFns.push(CustomValidators.whiteSpaceValidator());
                            break;
                        case 'pattern':
                            validatorFns.push(Validators.pattern(/^[0-9]+$/));
                            break;
                    }
                });
            }
            return validatorFns;
        }
    }
}

