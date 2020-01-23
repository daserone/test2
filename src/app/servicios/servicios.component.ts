import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  cervecerias:object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.cervezas().subscribe(data => {
      this.cervecerias = data;
      console.log(this.cervecerias);
    }
  );
  }

}
