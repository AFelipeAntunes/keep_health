import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeightPipe } from '../pipes/height.pipe';
import { AddressService } from '../address.service'; // Importa o AddressService

@Component({
selector: 'app-profile',
templateUrl: './profile.component.html',
styleUrls: ['./profile.component.scss'],
standalone: true,
imports: [FormsModule, CommonModule]
})
export class ProfileComponent implements OnInit {
user: any;
cep: string = '';
endereco: string | undefined;

constructor(private addressService: AddressService) { } // Injeta o AddressService

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
this.addressService.getAddress(this.cep).subscribe(
(address: any) => {
if (address.erro) {
alert('CEP não encontrado');
} else {
this.endereco = `${address.logradouro}, ${address.complemento} - ${address.bairro} - ${address.localidade}/${address.uf}`;
}
},
(error) => {
console.error('Erro ao buscar CEP:', error);
alert('Ocorreu um erro ao buscar o CEP');
}
);
}
}