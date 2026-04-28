import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone:false // Necesario para que detecte el modulo UserModule
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
