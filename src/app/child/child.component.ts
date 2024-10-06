import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
// @Input() abc='';
danger=true;
num=0;
handleclick(){
  this.num++;
}
isEven(){
  return this.num % 2==0;
}
}
