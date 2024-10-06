import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [DataService],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  data:any;
  constructor(public user: DataService) { }
  ngOnInit(): void {
    this.user.getUserData().subscribe((resp: any) => {
      this.data = resp;
      // console.log(this.data);
    });
  }
  visible: boolean = true;
  senddata() {
    this.data.visible = !this.data.visible;
  }
}

