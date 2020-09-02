import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'my-movie-selector',
  templateUrl: './movie-selector.component.html',
  styleUrls: [  ]
})
export class MovieSelectorComponent  {

  @Input() movie;

  @Output() select = new EventEmitter();

  onClick(){
    this.select.emit()
  }

}