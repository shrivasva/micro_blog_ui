import {Injectable} from "@angular/core";
import {StorageService} from "./db/StorageService";
import {Router} from "@angular/router";


@Injectable({
    providedIn: 'root'
})

export class PermissionsService {
    constructor(private router: Router) {
    }

    canActivate(storageService: StorageService): boolean {
        console.log(storageService.getToken())
        if (storageService.getToken() != undefined) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }

    canMatch(storageService: StorageService): boolean {
        return true;
    }
}