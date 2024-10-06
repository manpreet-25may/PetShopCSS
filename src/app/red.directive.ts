import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appRed]',
  standalone: true
})
export class RedDirective {

  constructor(el:ElementRef) {
   el.nativeElement.style.color='red';
   el.nativeElement.style.fontSize="10px";
   }

}
