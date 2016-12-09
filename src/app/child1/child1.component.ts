import { Component, OnInit } from '@angular/core';
import { TextChange} from '../text-change'

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component implements OnInit {
  text: string = '';

  constructor( private _textChange: TextChange) { }

  ngOnInit() {
  }

  textChanged(event) {
    console.log(event.target.value)
    this._textChange.next(event.target.value);
  }

}
