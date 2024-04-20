import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

// Importe os componentes compartilhados (Opção 1)
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
    // Implementar a lógica para salvar a atividade na localStorage
    // ...
    this.displayDialog = false; // Fechar o diálogo
  }
}