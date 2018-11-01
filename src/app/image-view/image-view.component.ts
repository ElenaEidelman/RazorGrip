import { Component, OnInit } from '@angular/core';
import { DataConfigService } from '../data-config.service';
import{ Image } from '../classes/image';


@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
  imagesObj:Image[];
  randomImg: Image;
  set = new Set();
  objIndex:string = "images index: ";
  constructor(private data: DataConfigService) { }

  ngOnInit() {
    this.getImages();
    setInterval(() => {
      this.getRandomImageObj();
    },5000);
  }

  getRandomImageObj():void{
    let randomNum = Math.round(Math.random() * this.imagesObj.length);
    console.log(randomNum);
    if(this.set.size < this.imagesObj.length){
      if(this.set.has(randomNum)){
        while(this.set.has(randomNum)){
          randomNum = Math.round(Math.random() * this.imagesObj.length);
        }
        this.setImgRandomObj(randomNum);
      }
      else{
        this.setImgRandomObj(randomNum);
      }
    }
    else{
      alert("No more images");
    }
  }
  setImgRandomObj(randomNum:number){
    this.set.add(randomNum);
    this.randomImg = this.imagesObj[randomNum];
    this.objIndex += randomNum.toString() + ', ';
  }
  getImages(){
    this.data.getImages().subscribe(images => {
      this.imagesObj = images;
      let randomNum = Math.round(Math.random() * images.length);
      this.randomImg = images[randomNum];
    });
  }

}
