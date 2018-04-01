import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HEROES } from '../heroes'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  heroes: Hero[] = HEROES
  selectedHero: Hero
  newHero: string

  constructor() {}

  ngOnInit() {}

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  onDeleted(hero: Hero) {
    this.heroes = this.heroes.filter(item => item !== hero)
    this.selectedHero = null
  }

  onAdd() {
    let nextId: number = Math.max.apply(
      Math, this.heroes.map(function (o) { 
        return o.id; 
      })
    ) + 1

    this.heroes.push({
      id: nextId,
      name: this.newHero
    })
  }
  
}
