import { Component, OnInit } from '@angular/core';
import { TextChange} from '../text-change'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [ TextChange ]
})

export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
