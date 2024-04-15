import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Inicializa o armazenamento de usuários na localStorage
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify({}));
    }
  }

  onSubmit(form: any) {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const { email, senha } = form.value;

    if (users[email] && users[email].senha === senha) {
      // Usuário existe, redireciona para /home
      this.router.navigate(['/home']);
    } else {
      // Usuário ou senha inválidos
      alert('Usuário ou senha inválidos');
    }
  }

  onForgotPassword(email: string) {
    const users = JSON.parse(localStorage.getItem('users') || '{}');

    if (users[email]) {
      users[email].senha = 'a1b2c4d4';
      localStorage.setItem('users', JSON.stringify(users));
      alert('Nova senha: a1b2c4d4');
    } else {
      alert('Usuário não encontrado');
    }
  }
}