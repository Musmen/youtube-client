import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

import { getNewColor } from '@youtube/common/tools';
import { getTimeInMilliseconds } from '@youtube/common/helper';

@Directive({ selector: '[appColorizer]' })
export class ColorizerDirective implements OnInit {
  @Input('appColorizer') postDate?: string;
  @Input() propertyToChangeColors: string[] = ['border-color'];
  @Input() additionAlphaChannels: string[] = [''];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (!this.postDate) return;

    const now = getTimeInMilliseconds('');
    const postTime = getTimeInMilliseconds(this.postDate);
    const timeAfterPublication = now - postTime;

    const newColor = getNewColor(timeAfterPublication);

    this.propertyToChangeColors
      .forEach((propertyToChangeColor, propertyIndex) => this.renderer
        .setStyle(
          this.elementRef.nativeElement,
          propertyToChangeColor,
          `${newColor}${this.additionAlphaChannels[propertyIndex]}`,
        ));
  }
}
