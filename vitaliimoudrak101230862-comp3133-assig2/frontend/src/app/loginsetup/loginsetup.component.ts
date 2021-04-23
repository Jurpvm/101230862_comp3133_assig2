import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loginsetup',
  templateUrl: './loginsetup.component.html',
  styleUrls: ['./loginsetup.component.css']
})
export class LoginsetupComponent implements OnInit {

  login: boolean = true; // switch between Login and SignUp
  email: string = '';
  password: string = '';
  name: string = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  confirm() {
    // ... you'll implement this in a bit
  }

  saveUserData(id, token) {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
    this.authService.setUserId(id);
  }
}
