import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Food {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  calorias: number; // Adicione a propriedade calorias
  vezes: number; // Adicione a propriedade vezes
}

@Component({
  selector: 'app-diet-detail',
  templateUrl: './diet-detail.component.html',
  styleUrls: ['./diet-detail.component.scss']
})
export class DietDetailComponent implements OnInit {
  dieta: Food | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const dietId = Number(this.route.snapshot.paramMap.get('id'));
    const dietas: Food[] = JSON.parse(localStorage.getItem('diets') || '[]');
    this.dieta = dietas.find(dieta => dieta.id === dietId);
  }
}