import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DogsComponent } from "./dogs/dogs.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Cat Select';
  imgSrc = '';
  loadingText = "";
  catListUpdated = false;

  constructor(private http: HttpClient) {}

  @ViewChild(DogsComponent) child:DogsComponent;

  onChange(breedId) {
    console.log(breedId);
    this.loadingText = " >> Getting image";

    // call
    this.http.get('https://api.thecatapi.com/v1/images/search?breed_ids='+breedId).subscribe(res => {
      this.imgSrc = res[0].url;
      this.loadingText = "";
      this.catListUpdated = true;
      this.child.callDog();
    });
  }

}
