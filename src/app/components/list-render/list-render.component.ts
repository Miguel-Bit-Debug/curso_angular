import { Component, OnInit } from '@angular/core'
import { Animal } from 'src/app/interfaces/Animal'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    { name: 'Turca', type: 'dog', age: 4 },
    { name: 'Pé de pano', type: 'horse', age: 5 },
    { name: 'Carly', type: 'Cat', age: 10 },
    { name: 'Dovahkiin', type: 'Cat', age: 1 }
  ]

  animalDetails: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }
}
