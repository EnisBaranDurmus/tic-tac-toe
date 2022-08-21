import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  styles: [`button { width: 100%; height: 100%; font-size: 5em !important; }`]
})
export class SquareComponent implements OnInit {

  constructor() {
    
  }
  @Input() value: 'X' | 'O' | undefined;
  ngOnInit(): void {
  }

}
