import { Component, OnInit } from '@angular/core';
import { TextChange} from '../text-change'

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  text: string;

  constructor(private _textChange: TextChange) {
    _textChange.subscribe({
      next: text => {
        this.text = text;
        console.log('text: ',text)
      }
    })
  }

  ngOnInit() {
  }

}
