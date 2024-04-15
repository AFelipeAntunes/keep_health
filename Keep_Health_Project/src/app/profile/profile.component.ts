import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { HeightPipe } from '../pipes/height.pipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule] // Adiciona CommonModule
})
export class ProfileComponent implements OnInit {
  user: any;
  cep: string = '';

  ngOnInit(): void {
    // Código para obter os dados do usuário logado da localStorage
    const email = localStorage.getItem('loggedUser');
    if (email) {
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      this.user = users[email];
    } else {
      // Redirecionar para o login se o usuário não estiver logado
      // ...
    }
  }

  pesquisarCEP() {
    // Implementar a lógica para pesquisar o CEP
  }
}