import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdministradorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda_online';
}
