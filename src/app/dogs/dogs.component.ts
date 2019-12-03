import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  imgSrc = '';
  loadingText = "";

  constructor(private http: HttpClient) {}

  @Input() catListHaveChanged: boolean;

  ngOnInit(){
    this.callDog();
  }

  callDog() {
    this.loadingText = " >> Getting image";

    // call
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe(res => {
      this.imgSrc = res['message'];
      this.loadingText = "";
      this.catListHaveChanged = false;
    });
  }

}
