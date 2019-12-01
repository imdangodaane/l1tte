import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent implements OnInit {

  widthOfImage = (window.innerWidth - 7 * 16) * (64 / 100);
  heightOfImage = this.widthOfImage / (16 / 9);

  constructor() { }

  ngOnInit() {
    console.log("TCL: PersonalPageComponent -> ngOnInit -> this.widthOfImage", this.widthOfImage)
    console.log("TCL: PersonalPageComponent -> ngOnInit -> this.heightOfImage", this.heightOfImage)
  }

}
