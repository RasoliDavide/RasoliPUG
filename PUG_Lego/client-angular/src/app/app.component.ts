import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Lego} from '../lego.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-angular';
  lego : Lego[];
  constructor(http : HttpClient)
  {
    http.get<Lego[]>("localhost:3000/api").subscribe(d => {this.lego});
  }
}
