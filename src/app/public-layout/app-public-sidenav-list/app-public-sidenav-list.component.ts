import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-public-sidenav-list',
  templateUrl: './app-public-sidenav-list.component.html',
  styleUrls: ['./app-public-sidenav-list.component.scss']
})
export class AppPublicSidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  } 
  
}
