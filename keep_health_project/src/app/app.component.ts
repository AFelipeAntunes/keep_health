// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LABMedical';
  pacientes = 70;
  consultas = 104;
  exames = 82;
  informacoesRapidas = [
    { nome: 'Cesar Abascal', idade: 30, contato: '(55) 8 9224-4534', plano: 'Unimed' },
    { nome: 'Andressa Lima', idade: 29, contato: '(48) 9 9112-3486', plano: 'Sem Plano' },
    { nome: 'Saul Souza', idade: 7, contato: '(48) 9 9112-3486', plano: 'Plamex' }
  ];
}