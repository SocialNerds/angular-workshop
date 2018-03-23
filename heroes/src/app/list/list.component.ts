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
}
