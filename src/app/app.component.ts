import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {title: 'Neat Tree', imageUrl: 'assets/tree.jpeg', username: 'nature', content: 'I saw this beautiful tree today'},
    {title: 'Snow Mountain', imageUrl: 'assets/mountain.jpeg', username: 'mountainLover', content: 'Here is picture of a mountain'},
    {title: 'Moutain Biking', imageUrl: 'assets/biking.jpeg', username: 'Biker', content: 'I did some biking today'}
  ];
}
