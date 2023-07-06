import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Anderson";
  age: number = 25;
  job: string = "Software Developer";
  hobbies = ['Ler', 'Estudar' , 'Programar', 'Correr']
  car = {
    name: "Pegeout 206",
    year: 2006,
  }

  constructor() {} 

  ngOnInit(): void {

  }

}
