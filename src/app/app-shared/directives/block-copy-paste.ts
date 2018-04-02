import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
    selector: '[appForbiddenText]'
})
export class ForbiddenTextDirective {
    @Input() invalidExpression?: string;
    constructor(private control: NgControl, private element: ElementRef) { }

    // @HostListener('keydown', ['$event']) forbiddenInputs(e) {
    //     // this.validateInput(e.target.value);
    //     console.log('keydown');
    //     console.log(e.keyCode);
    //     console.log(this.element);
    //     //  this.element.nativeElement.value = '22/';
    //     if ((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode === 191) {
    //         if (e.target.value.length > 10) {
    //             return false;
    //         }
    //         return true;
    //     }
    //     return false;
    //     // console.log(e.target.value);
    //     // console.log(this.control);
    //     // this.maskInput(e.target.value);
    //     // this.control.control.setValue(this.maskInput(e.target.value));
    // }
    @HostListener('keyup', ['$event']) forbiddenInputs1(e) {
        console.log('keyup');
        console.log(e.keyCode);
        // this.element.nativeElement.setValue(e.target.value + '/');
        this.element.nativeElement.value = e.target.value + '/';
        console.log(this.element.nativeElement);
        //  this.element.nativeElement.value = '22/';
    }

    // @HostListener('change', ['$event']) forbiddenPasteInputs(e) {
    //     this.validateInput(e.target.value);
    // }

    validateInput(input: string) {
        if (input) {
            // tslint:disable-next-line:quotemark
            const regex = new RegExp("/^[A-z\d_@.#$=!%^)(\]:\*;\?\/\,}{'\|<>\[&\+-]*$/", 'gi');
            console.log(regex);
            if (!input.match(regex)) {
                const output = input.replace(regex, '');
                this.control.control.setValue(output);
            }
        }
    }

    maskInput(value: string) {
        console.log(value);
        const v = value;
        if (v.match(/^\d{2}$/) !== null) {
            value = v + '/';
        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
            value = v + '/';
        }
        console.log(value);
        this.control.control.setValue(value);
    }

    // fixDatePattern(currDate) {
    //     const currentDate = currDate;
    //     let currentLength = currentDate.length;
    //     const lastNumberEntered = currentDate[currentLength - 1];
    //     let dateCountTracker = 0;
    //     if (!this.isNumber(lastNumberEntered)) {
    //         return currentDate.substring(0, currentLength - 1);
    //     }

    //     if (currentLength > 10) {
    //         return currentDate.substring(0, 10);
    //     }

    //     if (currentLength === 1 && currentDate > 1) {
    //         const transformedDate = '0' + currentDate + '/';
    //         // const dateCountTracker = 2;
    //         currentLength = transformedDate.length;
    //         return transformedDate;
    //     } else if (currentLength === 4 && currentDate[3] > 3) {
    //         const transformedDate = currentDate.substring(0, 3) + '0' + currentDate[3] + '/';
    //         dateCountTracker = 5;
    //         currentLength = transformedDate.length;
    //         return transformedDate;
    //     } else if (currentLength === 2 && (dateCountTracker !== 2 && dateCountTracker !== 3)) {
    //         dateCountTracker = currentLength;
    //         return currentDate + '/';
    //     } else if (currentLength === 5 && (dateCountTracker !== 5 && dateCountTracker !== 6)) {
    //         dateCountTracker = currentLength;
    //         return currentDate + '/';
    //     }
    //     dateCountTracker = currentLength;
    //     return currentDate;
    // }

    // isNumber(n) {
    //     return !isNaN(parseFloat(n)) && isFinite(n);
    // }
}
