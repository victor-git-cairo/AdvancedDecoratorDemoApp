import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@input and @output decorator demo app';

  musicians = ['Ed Sheeran', 'Prince Indah', 'Emma Jalamo'];
  name: string | undefined;

  addArtists(newMusician: any) {
    this.name = newMusician;
    this.musicians.push(newMusician);

  }

}
