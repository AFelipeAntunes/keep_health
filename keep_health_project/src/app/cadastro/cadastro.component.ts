import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome = '';
  email = '';
  dataNascimento = '';
  senha = '';
  confirmarSenha = '';

  constructor(private router: Router) {}

  cadastrar() {
    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não conferem.');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const novoUsuario = {
      nome: this.nome,
      email: this.email,
      dataNascimento: this.dataNascimento,
      senha: this.senha
    };
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuário cadastrado com sucesso!');
    this.router.navigate(['/login']); // Redireciona para o login
  }

  voltar() {
    this.router.navigate(['/login']);
  }
}