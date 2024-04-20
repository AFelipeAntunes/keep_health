
import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

// OU (Opção 2)
// import { HeaderComponent, SidebarComponent } from '../shared/components'; // Se você estiver usando um arquivo de barril

interface Atividade {
  tipo: string;
  data: Date;
  distancia?: number;
  tempo?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    HeaderComponent, // Importe os componentes compartilhados (Opção 1)
    SidebarComponent, // Importe os componentes compartilhados (Opção 1)
  ],
})
export class HomeComponent implements OnInit {
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
  atividades: Atividade[] = [];

  ngOnInit() {
    // Carregar atividades da localStorage
    this.atividades = JSON.parse(localStorage.getItem('atividades') || '[]');
  }

  showDialog() {
    this.displayDialog = true;
  }

  salvarAtividade() {
    let atividades: Atividade[] = JSON.parse(localStorage.getItem('atividades') || '[]');
    atividades.push(this.atividade);
    localStorage.setItem('atividades', JSON.stringify(atividades));
    this.atividade = { tipo: '', data: new Date() };
    this.displayDialog = false;
    // Atualizar a lista de atividades após salvar
    this.atividades = atividades;
  }
}