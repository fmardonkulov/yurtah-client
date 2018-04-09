import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-main-menu',
  templateUrl: './profile-main-menu.component.html',
  styleUrls: ['./profile-main-menu.component.css']
})
export class ProfileMainMenuComponent implements OnInit {

  menuTransformed = false;
  constructor() { }

  ngOnInit() {
  }
  toggleMenu() {
    this.menuTransformed ? this.menuTransformed = false : this.menuTransformed = true;
  }

}
