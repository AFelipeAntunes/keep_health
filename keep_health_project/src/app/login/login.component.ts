import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Usuario {
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent implements OnInit {

  email: string = "";
  senha: string = "";

  constructor(private router: Router = Inject(Router)) { }

  ngOnInit(): void { }

  entrar(): void {
    // Valida se o email e a senha estão preenchidos
    if (!this.email || !this.senha) {
      return alert("Preencha todos os campos!");
    }

    // Valida se o email é válido
    if (!this.validarEmail(this.email)) {
      return alert("Email inválido!");
    }

    // Valida se a senha é válida
    if (!this.validarSenha(this.senha)) {
      return alert("Senha inválida!");
    }

    // Simula a autenticação com um objeto localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    if (usuarios) {
      const usuarioEncontrado = usuarios.find((usuario: Usuario) => usuario.email === this.email && usuario.senha === this.senha);

      if (usuarioEncontrado) {
        // Redireciona para a página inicial
        this.router.navigate(["/home"]);
      } else {
        alert("Usuário não encontrado!");
      }
    } else {
      // Exibir mensagem de erro informando que a lista de usuários está vazia
      alert("Erro ao carregar a lista de usuários!");
    }
  }

  esqueciSenha(): void {
    alert("Sua senha foi alterada para 'a1b2c4d4'.");
  }

  cadastrar(): void {
    // Redireciona para a página de cadastro
    this.router.navigate(["/cadastro"]);
  }

  validarEmail(email: string): boolean {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  validarSenha(senha: string): boolean {
    return senha.length >= 6;
  }

}
