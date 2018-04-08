import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  public data = {
    videos: [''],
    images: [''],
  };
  constructor() { }

  ngOnInit() {
  }

}
