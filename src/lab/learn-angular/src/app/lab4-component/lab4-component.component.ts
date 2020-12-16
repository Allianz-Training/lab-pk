import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4-component',
  templateUrl: './lab4-component.component.html',
  styleUrls: ['./lab4-component.component.css']
})
export class Lab4ComponentComponent implements OnInit {

  items = [1,2,3,4,5,8,9,10]
  constructor() { }

  ngOnInit(): void {
  }

}
