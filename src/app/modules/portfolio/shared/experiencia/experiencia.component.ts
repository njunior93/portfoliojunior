import { Component, Input } from '@angular/core';
import { IExp } from '../../interface/Exp.interface';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
})
export class ExperienciaComponent {
  @Input() exp: IExp = {
    titulo: '',
    data: '',
    descricao: '',
    cargo: '',
    linha: '',
  };
}
