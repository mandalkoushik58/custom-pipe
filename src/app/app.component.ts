import { Component } from '@angular/core';
import { cricketers } from './shared/model/const/player';
import { Iplayer } from './shared/model/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customPipe';
  searchByValue!:string;

  playersArray:Iplayer[]=cricketers
}
