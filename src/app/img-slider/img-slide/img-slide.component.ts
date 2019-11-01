import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.scss']
})
export class ImgSlideComponent implements OnInit {
  // @ts-ignore
  @ViewChild('tmpl') template: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
