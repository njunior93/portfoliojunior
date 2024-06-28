import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MainComponent } from '../../components/main/main.component';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { gsap } from 'gsap';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';

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
    CdkDrag,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnInit {
  private click: number = 0;
  private duracaoClick: number = 0;
  private tempoClick: number = 100;
  private idIntervalo: any;

  onMouseDown(): void {
    this.click = new Date().getTime();
  }

  onMouseUp(): void {
    const duracaoClickSoltar = new Date().getTime();
    this.duracaoClick = duracaoClickSoltar - this.click;
  }

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {}


  irExperiencias(): void {

    if (this.duracaoClick < this.tempoClick && this.idIntervalo) {
      this.router.navigate(['/experiencias']).then(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
      });
      clearInterval(this.idIntervalo);
      this.idIntervalo = null;
    }
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.irExperiencias();
    }
  }

  private notificacaoAtual: number = 1;

  iniciarNotificacao() {
    this.idIntervalo = setInterval(() => {
      this.mostrarNotificacao();
    }, 3000);
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
    const botao_flutuante = document.querySelector('.botao-flutuante');

    gsap.to(botao_flutuante, {
      y: -20,
      duration: 1.5,
      repeat: -1,
      ease: 'sine.inOut',
      yoyo: true,
    });
  }
}
