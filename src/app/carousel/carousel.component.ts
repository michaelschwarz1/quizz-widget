import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

private itemList = [{id:1, url:'https://upload.wikimedia.org/wikipedia/en/a/a9/Moomin_kuva.JPG', text:'Is this a munin?', isTrue: true},{id:2,url:'https://assets.pokemon.com/assets/cms2/img/misc/countries/at/country_detail_pokemon.png', text: 'Is this a munin?', isTrue:false},{ id:3, url:'https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Moomin_characters.png/220px-Moomin_characters.png', text: 'Is this a Pokemon?', isTrue:false}];
private index :number = 0;
item:any;
showStatus: boolean = false;
quizSuccess:boolean = false;
points: number = 0;
@Output() success :EventEmitter<boolean> = new EventEmitter();
nextImage(){
  this.showStatus = true;
  setTimeout(() =>
{
  this.showStatus= false;
  this.quizSuccess = null;
  this.index +=1;
  this.item = this.itemList[this.index];
},
2000);


}
voteTrue(){
  if(this.item.isTrue){
    this.quizSuccess=true;
  }else{
    this.quizSuccess=false;
  }
this.nextImage();
}
voteFalse(){
  if(!this.item.isTrue){
    this.quizSuccess=true;
  }
  else{
    this.quizSuccess=false;
  }
    this.nextImage();
}
  ngOnInit(): void {
    this.item=this.itemList[this.index];
  }

}
