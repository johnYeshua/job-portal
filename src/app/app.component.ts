import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Job Portal';

  onSearch(query: string) {
    console.log(`Performing search with query: ${query}`);
  }
}
