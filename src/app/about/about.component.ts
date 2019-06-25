import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  tiles: Tile[] = [
    {text: 'Sql DataBase with 1 table named products >>->>> ', cols: 3, rows: 1, color: 'lightblue'},
    {text: '<<<-vv C# - ServerSide', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Design with Angular-Material directives', cols: 2, rows: 1, color: 'lightpink'},
    {text: '<<<-<< Angular 7 - ClientSide', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
}
