import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit(): void {
  }

  onClick(){
    this._router.navigate(['/profile',2]);
  }
}
