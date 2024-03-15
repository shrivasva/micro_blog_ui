import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-not-found404',
  standalone: true,
    imports: [
        FooterComponent
    ],
  templateUrl: './not-found404.component.html',
  styleUrl: './not-found404.component.css'
})
export class NotFound404Component {

}
