import { Component } from '@angular/core';

export interface Card{
  title : string;
  bodyText : string;
  url : string;
  showImg : boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards : Card[] =[{
    title : 'Card 1 title',
    showImg: false,
    bodyText : 'This is card 1',
    url: 'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be846cf9e0ad057035a_oaVMYWTVDbSobpm1nXr8S9ERSmhLz8iYF3u2t12bmluiRBaHH4YZ6FGWajs1T9yDSAT-BpnVOjkxFE5blXakKWmtztAM1K-_5PSnHKMNxRei3VjvJHp7Hvt8mSikLqCdlopkHZHf.png'
  },{
    title : 'Card 2 title',
    showImg: false,
    bodyText : 'This is card 2',
    url: 'https://i.pinimg.com/736x/9c/fe/87/9cfe873a69868ee5d6a8b048ed9dbb7f.jpg'
  },{
    title : 'Card 3 title',
    showImg: true,
    bodyText : 'This is card 3',
    url: 'https://preview.redd.it/8qfdlkidog231.jpg?auto=webp&s=41952f11c9b7d7e1ed79997ee41efd71d463367d'
  }
  ]



}
