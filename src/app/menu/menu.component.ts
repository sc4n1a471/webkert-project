import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() selectedPage = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  changePage(pageValue: string) {
    this.selectedPage.emit(pageValue)
  }

}
