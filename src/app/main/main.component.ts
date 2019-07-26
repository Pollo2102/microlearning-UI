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

  // POST
  email: string;
  name: string;
  subscriptions: string;

  wiki2: boolean;
  react2: boolean;
  kanji2: boolean;
  cia2: boolean;

  // PUT
  email2: string;
  subscriptions2: string;

  // DELETE
  email3: string;


  constructor() { }

  ngOnInit() {
  }

}
