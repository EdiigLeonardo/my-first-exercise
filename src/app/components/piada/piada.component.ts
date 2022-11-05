import { Component, OnInit, Input } from '@angular/core';
import {LISTA_PIADAS} from "./mock-piada";
import {Piada} from "../../piada";


@Component({
  selector: 'app-piada',
  templateUrl: './piada.component.html',
  styleUrls: ['./piada.component.css']
})
export class PiadaComponent implements OnInit {

  listaPiadas: Piada[] = LISTA_PIADAS
  @Input() piada = "";

  constructor() { }

  ngOnInit(): void {
  }


}
