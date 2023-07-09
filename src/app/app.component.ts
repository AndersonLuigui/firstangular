import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Anderson';
  
  userData = {
    email: 'alns1536@hotmail.com',
    role: 'Admin',
  }
  title = 'firstproject';
}
