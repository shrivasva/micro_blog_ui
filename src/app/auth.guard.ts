import {CanActivateFn} from '@angular/router';
import {StorageService} from './db/StorageService';
import {inject} from '@angular/core';
import {PermissionsService} from './PermissionService';


export const authGuard: CanActivateFn = (route, state) => {
    return inject(PermissionsService).canActivate(inject(StorageService));
};
