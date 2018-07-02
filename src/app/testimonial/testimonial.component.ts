import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  slideIndex = 1;
  dot: HTMLSpanElement;
  slide: HTMLDivElement;

  constructor() { }


  ngOnInit() {
    this.showSlides(1);
  }
  plusSlides(n: number) {
    console.log('hip');
    this.showSlides(this.slideIndex += n);

  }
  currentSlide(n: number) {
    console.log('his');
    this.showSlides(this.slideIndex = n);

  }
  showSlides(n: number) {
    console.log(n);
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {this.slideIndex = 1; }
    if (n < 1 ) {this.slideIndex = 1; }
    for (let i = 0; i < slides.length; i++) {
      this.slide = <HTMLDivElement>slides[i];
      this.slide.style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    (<HTMLDivElement>slides[this.slideIndex - 1]).style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
    console.log(n + slides.length + dots.length);
  }

}
