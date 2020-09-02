import {Injectable } from '@angular/core';
import { FLOP_DATA } from './FLOP_DATA';

@Injectable({
  providedIn: 'root'
})
export class FlopChooserService{
  flopData;

  constructor(){
    this.flopData = FLOP_DATA;
  }
  // Feel free to put your own data here if you have other favorite flops
  
  getRandomIndex(){
    return Math.floor(Math.random()*Math.floor(this.flopData.length));
  }

  getTwoRandomFlops(){
    let firstIndex = this.getRandomIndex();
    let secondIndex = firstIndex;
    while(secondIndex === firstIndex)
      secondIndex = this.getRandomIndex();
    return{
      first: this.flopData[firstIndex],
      second: this.flopData[secondIndex]
    }
  }

  isChoicesCorrect(choice,other){
    return choice.stars <= other.stars

  }
}