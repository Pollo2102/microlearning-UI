import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  wiki: boolean;
  react: boolean;
  kanji: boolean;
  cia: boolean;

  email: string;
  name: string;

  

  constructor() { }

  ngOnInit() {
  }

}
