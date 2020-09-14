import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMessage: string = '';
  isCross = false;
  itemArray: string[] = Array(9).fill('empty')

  constructor(private toastr: ToastrService){ }

  handleClick(itemNum: number){
    // if already have a winner
    if(this.winMessage) this.toastr.success(this.winMessage);

    // if this click is empty
    if(this.itemArray[itemNum] === 'empty'){
      this.itemArray[itemNum] = this.isCross ? 'cross' : 'circle';
      this.isCross = !this.isCross
    } 
    // if this space already filled
    else this.toastr.info('Already filled')

    // after every click we need to check the winner
    this.calculateWinner();
  }

  calculateWinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(this.itemArray[a] !== 'empty' && this.itemArray[a] === this.itemArray[b] && this.itemArray[a] === this.itemArray[c]){
        console.log(this.itemArray[a]);
        
        return this.winMessage = `Player ${this.itemArray[a]} Won!`  // this.itemArray[a] is the winner
      }
    }
    return null
  }

  reloadGame(){
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty')
  }


}
