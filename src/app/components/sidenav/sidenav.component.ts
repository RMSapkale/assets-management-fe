import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  //   imageUrl!: any;
  //   file: File | any;

  //   onSelectFile(event: any) {
  //     this.file = event.target?.files[0]
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => this.imageUrl = e.target.result;
  //     reader.readAsDataURL(this.file);
  //   }

  //  delete() {
  //     this.imageUrl =null;
  //     this.file = '';
  //   }

  name = 'Angular ' + VERSION.major;
  url!: any;
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url = event.target?.result;
        console.log(this.url);
      };
    }
  }
  public delete() {
    this.url = null;
  }

}



