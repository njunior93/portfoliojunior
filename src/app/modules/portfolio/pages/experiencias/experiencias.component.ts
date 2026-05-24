import { AfterViewInit, Component, signal } from '@angular/core';
import { IExp } from '../..//interface/Exp.interface';
import { ExperienciaComponent } from '../../shared/experiencia/experiencia.component';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavComponent } from '../../components/nav/nav.component';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [NavComponent, ExperienciaComponent, FooterComponent],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss',
})
export class ExperienciasComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {}

  irPrincipal(): void {
    this.router.navigate(['/']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  public animacaoDesktop() {
    (gsap.utils.toArray('#emprego') as HTMLElement[]).forEach((emprego, i) => {
      gsap.fromTo(
        emprego,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 4,
          delay: i * 2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: emprego,
            start: 'top 68%',
            end: 'top 65.9%',
            toggleActions: 'play reverse play reverse',
            scrub: 2,
          },
        },
      );
    });
  }

  public animacaoMobile() {
    (gsap.utils.toArray('#emprego') as HTMLElement[]).forEach((emprego, i) => {
      gsap.fromTo(
        emprego,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 4,
          delay: i * 2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: emprego,
            start: 'top 55%',
            end: 'top 54.9%',
            toggleActions: 'play reverse play reverse',
            scrub: 2,
          },
        },
      );
    });
  }

  public checkTamanhoTela() {
    if (window.innerWidth >= 768) {
      this.animacaoDesktop();
    } else {
      this.animacaoMobile();
    }
  }

  ngAfterViewInit() {
    this.checkTamanhoTela();
  }

  public arrayExp = signal<IExp[]>([
    {
      titulo: 'Charmim.com',
      cargo: 'Assistente administrativo',
      data: 'Fev de 2013 - Dez de 2014',
      descricao:
        'Responsável pelo controle de recebimento de mercadorias, conferência de notas fiscais e apoio operacional no fluxo logístico da empresa. Auxilio na esteira de produção da fábrica.',
      linha: 'linha-timeline',
    },
    {
      titulo: 'Gera3 Sistemas',
      cargo: 'Estagiário de apoio técnico',
      data: 'Mar de 2016 - Mai de 2017',
      descricao:
        'Suporte técnico a clientes com análise e resolução de incidentes relacionados ao sistema ERP e Gerencial de Vendas da empresa',
      linha: 'linha-timeline',
    },
    {
      titulo: 'Gera3 Sistemas',
      cargo: 'Suporte técnico',
      data: 'Jun de 2017 - Nov de 2021',
      descricao:
        'Prestação de suporte via ligação ou chat, resolvendo eventuais problemas relacionados ao produto da empresa. Coleta e manutenção de banco de dados; Assistência em eventuais dúvidas, erros ou incidentes, via sistema ou banco de dados; Instalação e configuração de terminal cliente e/ou reinstalação do sistema em servidor.',
      linha: 'linha-timeline',
    },
    {
      titulo: 'Grupo Boticário',
      cargo: 'Analista de implantação',
      data: 'Nov de 2021 - Mai de 2026',
      descricao:
        'Implantação e suporte de sistemas ERP e operação de vendas para lojas próprias e franqueados. Atuação na configuração, validação e resolução de incidentes dos sistemas Retaguarda GB, PDV GB e MOB GB. Suporte técnico e acompanhamento de demandas operacionais, garantindo estabilidade dos sistemas em ambiente de produção.',
    },
  ]);
}
