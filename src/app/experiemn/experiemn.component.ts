import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-experiemn',
    standalone: true,
    templateUrl: './experiemn.component.html',
    styleUrl: './experiemn.component.css',
    imports: [HeaderComponent, FooterComponent, NgIf]
})
export class ExperiemnComponent {
  toggleFlag: boolean = false;

  toggle() {
this.toggleFlag = !this.toggleFlag
  }

}
