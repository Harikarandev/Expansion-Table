import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showExpansion: boolean = false;
  expansion(){
  this.showExpansion = true;
  }

}
