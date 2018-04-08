import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  data: object;
  constructor(
    private router: Router,
  ) {
    this.data = {email: '', password: ''};
  }

  ngOnInit() {
  }
  submitForm() {
    console.log(this.data);
    if (this.data['email'] !== 'admin@mail.ru' || this.data['password'] !== 'adminadmin') {
      alert('Неверно введены логин и пароль');
    } else {
      sessionStorage.token = 'normas';
      this.router.navigate(['/accounts/edit/personal']);
    }
  }

}
