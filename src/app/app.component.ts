import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  deck=[]
  title = 'angular-cards';

  shuffle=()=>{
    this.deck=[{suit:"spades", value:"4"},{suit:"hearts", value:"Queen"}]
  }
  makeDeck=()=>{
    this.deck = [{suit:"hearts", value:"Queen"},{suit:"spades", value:"4"}]
  }
}
