import { Component } from '@angular/core';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ImageSliderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
