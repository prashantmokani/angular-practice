import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [
    `
      .colorWhite {
        color: white;
        background-color: blue;
      }
    `
  ]
})
export class DirectivesComponent {

  detailsToAdd = '';
  log : string[] = [];
  index = 0;

  addDetails() {
    this.log.push(this.detailsToAdd);
  }

  removeDetails() {
    this.log.pop();
  }

}
