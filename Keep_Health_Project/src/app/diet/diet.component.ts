import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Food {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.scss'],
  standalone: true,
  imports: [FormsModule]  // Adiciona o módulo FormsModule
})
export class DietComponent implements OnInit {
  dietas: Food[] = [];
  searchTerm: string = '';
  dietasFiltradas: Food[] = []; // Lista filtrada para exibição

  ngOnInit(): void {
    // Inicializa a lista de dietas na localStorage
    if (!localStorage.getItem('diets')) {
      const dietasIniciais: Food[] = [
        // ... adicione aqui seus 10 alimentos com id, nome, descrição e imagem
      ];
      localStorage.setItem('diets', JSON.stringify(dietasIniciais));
    }

    // Carrega as dietas da localStorage
    this.dietas = JSON.parse(localStorage.getItem('diets') || '[]');
    this.dietasFiltradas = this.dietas; // Inicializa a lista filtrada
  }

  searchDiets() {
    this.dietasFiltradas = this.dietas.filter(dieta =>
      dieta.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}