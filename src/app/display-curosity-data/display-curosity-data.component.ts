import { Component } from '@angular/core';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-curosity-data',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './display-curosity-data.component.html',
  styleUrl: './display-curosity-data.component.scss'
})
export class DisplayCurosityDataComponent {
  myObj:any={};
  displayMarsPhotos(){
  fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
  .then(response=>response.json())
  .then(data=>{
     this.myObj=data;
  })
}
}
