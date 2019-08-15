import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/Card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  //declare card property in typescript with Card model
  @Input() card: Card;
  constructor() { }

  ngOnInit() {
  }

}
