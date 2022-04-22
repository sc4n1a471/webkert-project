import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() currentPage: string = ''
  @Output() selectedPage = new EventEmitter()
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  changePage() {
    this.selectedPage.emit(this.currentPage)
  }

  close() {
    this.onCloseSidenav.emit(true)
  }
}
