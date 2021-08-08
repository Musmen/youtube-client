import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

import { getNewBorderColor } from '@common/tools';
import { getTimeInMilliseconds } from '@common/helper';

@Directive({ selector: '[appBorderColorizer]' })
export class BorderColorizerDirective implements OnChanges {
  @Input('appBorderColorizer') postDate?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (!this.postDate) return;

    const now = getTimeInMilliseconds('');
    const postTime = getTimeInMilliseconds(this.postDate);
    const timeAfterPublication = now - postTime;

    const newBorderColor = getNewBorderColor(timeAfterPublication);

    this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', newBorderColor);
  }
}
