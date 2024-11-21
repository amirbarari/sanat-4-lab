import { Component } from '@angular/core';
import { News } from '../../../models/news.model';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
  news: News[] = [{path: 'assets/logos/iut-logo.svg', description: 'دانشگاه صنعتی اصفهان از یک آزمایشگاه صنعتی جدید رونمایی کرد. تا ارتباط صنعت و دانشجویان را تقویت کند.'}]
  currentNews: News = {path: 'assets/logos/iut-logo.svg', description: 'دانشگاه صنعتی اصفهان از یک آزمایشگاه صنعتی جدید رونمایی کرد. تا ارتباط صنعت و دانشجویان را تقویت کند.'};
}
