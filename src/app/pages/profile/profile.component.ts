import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  idPerfil = this._route.snapshot.paramMap.get('id');

  ngOnInit(): void {
  }

}
