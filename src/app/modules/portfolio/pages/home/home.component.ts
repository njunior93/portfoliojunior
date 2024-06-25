import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MainComponent } from '../../components/main/main.component';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { gsap } from 'gsap';
import { Router } from '@angular/router';
import { Draggable } from 'gsap/Draggable';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MatTooltipModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnInit {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {}

  irExperiencias(): void {
    this.router.navigate(['/experiencias']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  private notificacaoAtual: number = 1;

  iniciarNotificacao() {
    setInterval(() => {
      this.mostrarNotificacao();
    }, 4000);
  }

  ngOnInit() {
    this.iniciarNotificacao();
  }

  mostrarNotificacao() {
    const notificacaoId = `notificacao${this.notificacaoAtual}`;
    this.notificacaoAtual = this.notificacaoAtual === 1 ? 2 : 1;
    const notificacao = document.getElementById(notificacaoId);

    if (notificacao) {
      gsap.to(notificacao, {
        duration: 0.5,
        opacity: 1,
        y: -50,
        ease: 'power1.inOut',
        onComplete: () => {
          gsap.to(notificacao, {
            duration: 0.5,
            opacity: 0,
            y: 0,
            delay: 1,
          });
        },
      });
    }
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(Draggable);
    const botao_flutuante = document.querySelector('.botao-flutuante');
    const botao = document.querySelector('.botao');

    Draggable.create(botao, {
      bounds: '.botaoZona',
      inertia: true,
      // onDragStart: function () {
      //   this['target'].style.zIndex = 50;
      // },
      // onDragEnd: function () {
      //   this['target'].style.zIndex = 10;
      // },
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
