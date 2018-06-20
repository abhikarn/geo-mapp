import { Router } from '@angular/router';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Validation } from '../models/form.control.model';
import { SaveDialogComponent } from 'app/app-shared/modal-components/save-box-modal-component/save-dialog-box.component';
import { ConfirmDialogComponent } from 'app/app-shared/modal-components/confirm-box-modal-component/confirm-dialog-box.component';

export enum StateType {
    inMemory,
    session,
    persisted
}
export interface OtherFormConfig {
    id?: string;
    show?: boolean;
    disable?: boolean;
    validations?: Array<Validation>;
}

export abstract class AppBaseComponent {
    @ViewChild('modal', { read: ViewContainerRef })
    parent: ViewContainerRef;
    constructor(public componentFactoryResolver?: ComponentFactoryResolver,
        public router?: Router) {
    }
    protected get isAuthenticated(): boolean { return !!this.getState('authtoken'); }

    protected setState<T>(name: string, value: T, storage?: StateType): void {
        if (!storage) {
            storage = StateType.persisted;
        }
        switch (storage) {
            case StateType.session:
                if (Boolean(value)) {
                    window.sessionStorage.setItem(name, JSON.stringify(value));
                } else {
                    window.sessionStorage.removeItem(name);
                }
                break;
            case StateType.persisted:
                if (Boolean(value)) {
                    window.localStorage.setItem(name, JSON.stringify(value));
                } else {
                    window.localStorage.removeItem(name);
                }
                break;
            default:
                break;
        }
    }

    protected getState<T>(name: string, storage?: StateType): T {
        if (!storage) {
            storage = StateType.persisted;
        }
        switch (storage) {
            case StateType.session:
                const sessionValue: string = window.sessionStorage.getItem(name);
                return JSON.parse(sessionValue);
            case StateType.persisted:
                const persistedValue: string = window.localStorage.getItem(name);
                return JSON.parse(persistedValue);
            default:
                console.log(`Cannot find storage type. Each item in state must be explicitly declared.`);
                break;
        }
    }

    protected clearState(name: string, storage?: StateType): void {
        if (!storage) {
            storage = StateType.persisted;
        }
        switch (storage) {
            case StateType.session:
                window.sessionStorage.removeItem(name);
                break;
            case StateType.persisted:
                window.localStorage.removeItem(name);
                break;
            default:
                console.log(`Cannot find storage type. Each item in state must be explicitly declared.`);
                break;
        }
    }
    clearAllStorage(): void {
        localStorage.clear();
        this.clearAllSession();
    }
    clearAllSession(): void {
        sessionStorage.clear();
    }

    showModalPopup(type: string, message: string, routeName: string, doNavigate = true) {
        const componentD: any = type === 'confirm' ? ConfirmDialogComponent : SaveDialogComponent;
        const childComponent = this.componentFactoryResolver.resolveComponentFactory(componentD);
        const componentRef = this.parent.createComponent(childComponent);
        (<any>componentRef.instance).modalConfig = { message: message, title: type };
        setTimeout(() => {
            (<any>componentRef.instance).showModal();
            if (type === 'confirm') {
                (<any>componentRef.instance).onReject.subscribe(() => {
                    componentRef.destroy();
                    // childComponent = null;
                });
            }
            (<any>componentRef.instance).onAccept.subscribe(() => {
                componentRef.destroy();
                // childComponent = null;
                if (doNavigate) {
                    this.router.navigate([routeName]);
                }
            });
        }, 300);
    }

    protected doValidation(object: any, fields: string[]): boolean {
        let valid = true;
        fields.forEach((f) => {
            const modelValue = object[f];
            if (!modelValue || modelValue == 0) {
                valid = false;
            }
        });
        return valid;
    }

    protected comparePassword(password: string, confirmPassword: string): boolean {
        if (password === confirmPassword) {
            return true;
        } else {
            return false;
        }
    }
}

