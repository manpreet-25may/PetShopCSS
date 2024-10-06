import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ChildComponent } from './child/child.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PipesexampleComponent } from './pipesexample/pipesexample.component';
// import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, ChildComponent, 
    HttpClientModule,TableComponent,HomeComponent,ContactComponent,
    AboutComponent,RouterModule,
    PipesexampleComponent],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title='my project' ;
  // inputvariable="Hi,I am Your parent";
  // toggle(){
  //   console.log(':helooo')
  // }
  data: any;
  constructor(private user: DataService) { }

  ngOnInit(): void {
    this.user.getUserData().subscribe((resp: any) => {
      this.data = resp;
      console.log(this.data);
    });
  }

  danger = true;
  num = 0;
  handleclick() {
    this.num++;
  }
  isEven() {
    return this.num % 2 == 0;
  }

}
