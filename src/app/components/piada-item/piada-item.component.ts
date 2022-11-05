import { Component, OnInit, Input } from '@angular/core';
import {Piada} from "../../piada";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-piada-item',
  templateUrl: './piada-item.component.html',
  styleUrls: ['./piada-item.component.css']
})
export class PiadaItemComponent implements OnInit {

  @Input() piada!: Piada;
  color = "red";
  faCoffee = faCoffee;
  faStar = faStar;
  iconColor = "blue";
  date = new Date();
  flat = "left";

  constructor() { }

  ngOnInit(): void {
  }

}
