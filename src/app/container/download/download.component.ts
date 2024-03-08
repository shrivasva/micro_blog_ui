import { Component, Input } from '@angular/core';
import { ClientService } from '../../client.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [],
  providers: [ClientService],

  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent {
  constructor(private clientService: ClientService){}

  download() {
  this.clientService.downloadFile().subscribe((response: Blob) => {
    const blob = new Blob([response]);
    console.log(blob)
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'filename.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  });
}

}
