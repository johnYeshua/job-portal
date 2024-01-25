import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  searchQuery: string = '';

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  onInputChange() {
    
  }

  search() {
    this.searchEvent.emit(this.searchQuery);
  }
}



// <div class="container mt-5">
//   <app-search-bar (searchEvent)="onSearch($event)"></app-search-bar>
// </div>