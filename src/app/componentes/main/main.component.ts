import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  jogada() {
    let horas = () => {
      let h = new Date().getHours();
      if (h <= 5) return 'Boa madrugada, seja bem vindo ao meu site';
      if (h < 12) return 'Bom dia, seja bem vindo ao meu site';
      if (h < 18) return 'Boa tarde, seja bem vindo ao meu site';
      return 'Boa noite, seja bem vindo ao meu site';
    };
    alert(horas())

  }
}
