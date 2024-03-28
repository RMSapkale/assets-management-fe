import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',


})
export class DashboardPageComponent {

  imageUrl!: string;
  file: File | any;

  onSelectFile(event: any) {
    this.file = event.target?.files[0]
    const reader = new FileReader();
    reader.onload = (e: any) => this.imageUrl = e.target.result;
    reader.readAsDataURL(this.file);
  }


  public delete() {
    this.imageUrl;
  }

}
