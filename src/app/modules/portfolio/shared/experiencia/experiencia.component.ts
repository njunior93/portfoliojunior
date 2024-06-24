import {
  Component,
  Input,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IExp } from '../../interface/Exp.interface';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienciaComponent {
  readonly panelOpenState = signal(false);
  @Input() exp: IExp = {
    titulo: '',
    data: '',
    descricao: '',
    cargo: '',
    linha: '',
  };
}
