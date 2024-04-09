import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private router: Router) {}

  entrar() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioEncontrado = usuarios.find(
      (usuario: { email: string; senha: string; }) => usuario.email === this.email && usuario.senha === this.senha
    );

    if (usuarioEncontrado) {
      // Redirecionar para a home
      this.router.navigate(['/home']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }

  esqueciSenha() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioEncontrado = usuarios.find((usuario: { email: string; }) => usuario.email === this.email);

    if (usuarioEncontrado) {
      usuarioEncontrado.senha = 'a1b2c4d4';
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert('Sua senha foi alterada para "a1b2c4d4".');
    } else {
      alert('Usuário não encontrado.');
    }
  }

  cadastrar() {
    // Redirecionar para a tela de cadastro
    this.router.navigate(['/cadastro']);
  }
}