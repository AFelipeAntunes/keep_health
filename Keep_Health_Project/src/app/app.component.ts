import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent, SidebarComponent } from './shared/shared'; // Importe os componentes compartilhados

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppRoutingModule, HeaderComponent, SidebarComponent], // Adicione os componentes compartilhados
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Keep_Health_Project';
}