import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  template: ''
})
export class CadastroComponent {

  constructor(private router: Router) { }
  onSubmit(form: NgForm) {
    if (form.valid) {
      const { nome, email, dataNascimento, senha, confirmarSenha } = form.value;

      // Verifica se as senhas coincidem
      if (senha !== confirmarSenha) {
        alert('As senhas não coincidem');
        return;
      }

      // Verifica se o email já está cadastrado
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      if (users[email]) {
        alert('Email já cadastrado');
        return;
      }

      // Salva o usuário na localStorage
      users[email] = { nome, dataNascimento, senha };
      localStorage.setItem('users', JSON.stringify(users));

      alert('Cadastro realizado com sucesso!');
      this.router.navigate(['/login']);
    }
  }

  onVoltar() {
    this.router.navigate(['/login']);
  }
}