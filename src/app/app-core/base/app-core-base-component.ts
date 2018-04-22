import { FormGroup } from '@angular/forms';
import { Validation } from '../models/form.control.model';
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
    protected form: FormGroup;
    private loader = false;
    constructor() {
    }
    get showLoader(): boolean { return this.loader = localStorage.getItem('loader') === 'false'; }
    // set showLoader(name) { this.loader = localStorage.setItem('loader', name. === 'true'); }

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
}

