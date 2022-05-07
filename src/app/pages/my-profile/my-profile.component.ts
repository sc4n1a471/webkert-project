import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  @Input() userInfo!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
