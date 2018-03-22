import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Hero } from '../hero'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() hero: Hero
  @Output() onDeleted = new EventEmitter<Hero>()

  constructor() { }

  onDelete() {
    this.onDeleted.emit(this.hero)
  }
}
