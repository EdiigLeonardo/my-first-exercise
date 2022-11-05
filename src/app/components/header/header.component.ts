import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Piada do Dia';
  color = 'blue';

  constructor() { } // corre sempre que o nosso componente é inicializado

  ngOnInit(): void { // life cycle method
  }
  toggleLaugh(){
    alert("Kia, Kia, Kia...")
  }
  toggleCry(){
    alert("Nhê, Nhê, Nhê...")
  }

  increase(){
    console.log(this.increase())
  }
}
