import {isPlatformBrowser} from '@angular/common';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    local: any;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            console.log('browser');
        }
        // if (isPlatformServer(this.platformId)) { console.log('server'); }
    }

    addToken(token: string) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem("token", token);
        }
    }

    getToken():any {
        if (isPlatformBrowser(this.platformId)) {
            console.log('browser', localStorage.getItem('token'));
            return localStorage.getItem('token');
        }
        return undefined;
    }

}

