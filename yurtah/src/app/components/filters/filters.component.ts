import { Component, OnInit, ViewChild } from '@angular/core';
import { DropdownDirective, TOGGLE_STATUS } from 'angular-custom-dropdown';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @ViewChild('Dropdown') Dropdown: DropdownDirective;

  constructor() { }

  ngOnInit() {
    let header = document.getElementById("sort-ul");
    let btns = header.getElementsByClassName("sort-a");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        document.querySelector('body').id = this.getAttribute('data-view');
      });
    }

    // this.Dropdown.statusChange()
    //   .subscribe((status: TOGGLE_STATUS) => {
    //     let statusValue: String;
    //     if (status === TOGGLE_STATUS.OPEN) {
    //       statusValue = 'Opened';
    //     } else if (status === TOGGLE_STATUS.CLOSE) {
    //       statusValue = 'Closed';
    //     }
    //     console.info(`Dropdown status changed to "${statusValue}".`);
    //   });
  }

}
