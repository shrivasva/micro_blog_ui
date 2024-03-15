import {CanActivateFn} from '@angular/router';
import {StorageService} from '../storage/StorageService';
import {inject} from '@angular/core';
import {PermissionsService} from '../service/PermissionService';


export const authGuard: CanActivateFn = (route, state) => {
    return inject(PermissionsService).canActivate(inject(StorageService));
};
