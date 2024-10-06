import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  providers: [DataService],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  data:any;
  constructor(public user:DataService) { }

  ngOnInit(): void {
    this.user.getUserData().subscribe((resp:any)=>{
      this.data=resp;
      console.log(this.data);
    });
}
visible:Boolean=true;
senddata(){
  this.data.visible= !this.data.visible;

}

}

