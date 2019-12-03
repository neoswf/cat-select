import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Cat Select';
  imgSrc = '';
  loadingText = "";

  constructor(private http: HttpClient) {}

  onChange(breedId) {
    console.log(breedId);
    this.loadingText = " >> Getting image";

    // call
    this.http.get('https://api.thecatapi.com/v1/images/search?breed_ids='+breedId).subscribe(res => {
      this.imgSrc = res[0].url;
      console.log(this.imgSrc);
      this.loadingText = "";
    });
  }

}
