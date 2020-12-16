import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  @Input()
  title: string
  constructor() {
    console.log(`Constructor ${this.title}`)
  }

  ngOnInit(): void {
    console.log(`Oninit ${this.title}`)
  }

}
