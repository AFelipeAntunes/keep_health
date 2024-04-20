import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAddress(cep: string): Observable<Address> { // Especifica o tipo Address
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get<Address>(url); // Especifica o tipo Address
  }
}