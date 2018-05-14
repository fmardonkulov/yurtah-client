import { Component, OnInit } from '@angular/core';
import { Element } from '../../applets/dom-events';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (() => {
      const setHeight = () => {
        const height = window.innerHeight;
        document.getElementsByClassName('min-height')[0]['style'].minHeight = `${height}px`;
      };

      const doc = new Element('window');

      doc.resize(setHeight);
      setHeight();
    })();
  }

}
