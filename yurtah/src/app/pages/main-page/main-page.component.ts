import { Component, OnInit } from '@angular/core';
import { Element } from '../../applets/dom-events';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

    // some js styles
    // height of height element must be 100%

    (() => {
      const setHeight = () => {
        const height = window.innerHeight;
        document.getElementsByClassName('height')[0]['style'].height = `${height}px`;
      };

      const doc = new Element('window');

      doc.resize(setHeight);
      setHeight();
    })();




  }

}
