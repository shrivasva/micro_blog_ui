import {NgClass} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {ClientService} from '../../service/client.service';
import {UserModel} from './UserModel';
import {StorageService} from '../../storage/StorageService';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, NgClass],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

    user: UserModel = {
        username: '',
        password: ''
    };
    errMsg: string = '';

    constructor(private router: Router, private clientService: ClientService, private storageService: StorageService) {
    }

    login() {
        this.errMsg = '';
        this.clientService.login(this.user).subscribe((response: any) => {
            this.storageService.addToken(response.headers.get('token'))
            this.router.navigate(['blogs']);
        });
    }

    navigateToRegister() {
        this.router.navigate(['/register']);
    }

    navigateToForgotPassword() {
        this.router.navigate(['/forgot']);
    }

}
