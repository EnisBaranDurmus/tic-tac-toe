import { AfterViewInit,Component, OnInit,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any;
  xIsNext: boolean = true;
  winner: string | undefined;
  flag: number = 0;
  @ViewChild("idResult")
  idResult!: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
    console.log(this.squares);
  }
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }
  makeMove(idx: number) {
    //debugger
    if(this.squares[idx] == null){
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
    if(this.winner == null && this.flag == 0){
      this.enableDiv();
    }
  }
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(
        this.squares[a] && 
        this.squares[a] === this.squares[b] && 
        this.squares[a] === this.squares[c]
      ) 
      {
        return this.squares[a];
      }
    }
    this.flag = 9;
    for (let i = 0; i < this.squares.length; i++) {
      if(this.squares[i] == null) {
      }
      else{
        this.flag -=1;
      }
    } 
    return null;
  }
  disableDiv(){
    this.idResult.nativeElement.classList.add("disabledbutton");
    this.idResult.nativeElement.classList.remove("enableButton");
    
    this.newGame();
  }
  enableDiv(){
    this.idResult.nativeElement.classList.remove("disabledbutton");
    this.idResult.nativeElement.classList.add("enableButton");
  }

}
