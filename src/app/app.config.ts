import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class AppConfig {
    private config: IConfig = null;
    constructor() {

    }
    public get apiUrl(): string { return this.config.apiUrl; }
    /**
     * This method:
     *  Loads to get all env's variables or any configuartion while first time load
     */
    public load() {
        return new Promise((resolve) => {
            this.config = { apiUrl: environment.apiUrl };
            // if (environment.production) {
            //     const url = `${window.location.origin.split(':')[0]}:${window.location.origin.split(':')[1]}:${environment.port}`;
            //     this.config = { apiUrl: url };
            // }
            resolve(true);
        });
    }
}
export interface IConfig {
    apiUrl?: string;
    port?: string;
}
