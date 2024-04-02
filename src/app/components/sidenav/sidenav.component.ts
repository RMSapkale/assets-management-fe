import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  name = 'Angular ' + VERSION.major;
  url!: any;
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target?.result;
        console.log(this.url);
      };
    }
  }
  public delete() {
    this.url = null;
  }

}



