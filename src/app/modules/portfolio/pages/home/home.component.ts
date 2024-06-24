import { AfterViewInit, Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MainComponent } from '../../components/main/main.component';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MatTooltipModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {

  constructor(private router: Router) { }

  paginaExperiencia() {
    this.router.navigate(['/experiencias']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(Draggable);
    const botao_flutuante = document.querySelector('.botao-flutuante');
    const botao = document.querySelector('.botao');

    Draggable.create(botao, {
      bounds: '.botaoZona',
      inertia: true,
      onDragStart: function () {
        this['target'].style.zIndex = 50;
      },
      onDragEnd: function () {
        this['target'].style.zIndex = 10;
      },
    });

    gsap.to(botao_flutuante, {
      y: -20,
      duration: 1.5,
      repeat: -1,
      ease: 'sine.inOut',
      yoyo: true,
    });
  }
}
