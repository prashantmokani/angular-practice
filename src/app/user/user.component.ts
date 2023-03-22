import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userName = '';
  userCreationStatus = 'No User Added';
  resetButtonDisabled = true;
  userCreated = false;

  toggleDisable(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.resetButtonDisabled = inputValue.length == 0;
  }

  resetUserName() {
    this.userName = '';
  }

  createUser() {
    this.userCreated = true;
    this.userCreationStatus = "User is created with: " + this.userName;
  }
}
