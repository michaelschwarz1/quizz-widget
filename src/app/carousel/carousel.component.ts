import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {QuizItem} from './QuizItem';
import {QuizServiceService} from '../quiz-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
constructor(private quizService: QuizServiceService){}
private itemList: QuizItem[] = [];
private index = 0;
item: QuizItem;
showStatus = false;
quizSuccess = false;
points = 0;

nextImage(): void{
  this.showStatus = true;
  setTimeout(() =>
{
  this.showStatus = false;
  this.quizSuccess = null;
  this.index += 1;
  if(this.itemList[this.index] != null){
    this.item = this.itemList[this.index];
  }else{
    this.showResult();
  }

},
2000);


}
voteTrue(): void{
  if (this.item.isTrue){
    this.quizSuccess = true;
    this.points += 1;
  }else{
    this.quizSuccess = false;
  }
  this.nextImage();
}
voteFalse(): void{
  if (!this.item.isTrue){
    this.quizSuccess = true;
    this.points += 1;
  }
  else{
    this.quizSuccess = false;
  }
  this.nextImage();
}
showResult(): void{
  this.item.url = '../../assets/img/final.jpg';
  this.item.text = 'Your score is: ' + this.points + ' Points.';
  this.item.isTrue = null;
}
  ngOnInit(): void {
    this.itemList = this.quizService.ListQuizItems();
    this.item = this.itemList[this.index];
  }

}
