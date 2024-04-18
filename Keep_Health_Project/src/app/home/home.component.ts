import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

interface Atividade {
  tipo: string;
  data: Date;
  distancia?: number;
  tempo?: string;
}

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
  ],
})
export class HomeComponent {
  displayDialog: boolean = false;
  tiposAtividade: any[] = [
    { label: 'Corrida', value: 'corrida' },
    { label: 'Caminhada', value: 'caminhada' },
    { label: 'Natação', value: 'natacao' },
  ];
  atividade: Atividade = {
    tipo: '',
    data: new Date(),
  };

  showDialog() {
    this.displayDialog = true;
  }

  salvarAtividade() {
    let atividades: Atividade[] = JSON.parse(localStorage.getItem('atividades') || '[]');
    atividades.push(this.atividade);
    localStorage.setItem('atividades', JSON.stringify(atividades));
    this.atividade = { tipo: '', data: new Date() }; 
    this.displayDialog = false;
  }
}