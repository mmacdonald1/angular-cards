import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  deck=[]

  ngOnInit() {
     this.makeDeck()
  }

  shuffle=()=>{
    let i = this.deck.length
    let j
    let temp
    //from the back loop through until last letter
    while(--i > 0){
      //number that you will switch with current number
      j = Math.floor(Math.random()*(i+1))
      temp=this.deck[j]
      //swap j for i
      this.deck[j] = this.deck[i]
      //swap i for j
      this.deck[i] = temp
    }
  }
  makeDeck=()=>{
    let values=["2","3","4","5","6","7","8","9","10","J","Q","K", "A"]
    let suits=["H", "S", "D", "C"]
    let i = 0
    for(let j=0; j<13; j++){
     for(let k=0; k<4; k++){
       this.deck[i] = {}
       this.deck[i].id=i+1
       this.deck[i].value = values[j]
       this.deck[i].suit= suits[k]
       this.deck[i].img= "assets/images/"+values[j]+suits[k]+".png"
        ++i
     }
    }
   }

}
