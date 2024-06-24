import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { IExp } from '../..//interface/Exp.interface';
import { ExperienciaComponent } from '../../shared/experiencia/experiencia.component';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavComponent } from '../../components/nav/nav.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [NavComponent, ExperienciaComponent, FooterComponent],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss',
})
export class ExperienciasComponent implements AfterViewInit {
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
            markers: true,
          },
        },
      );
    });

    gsap.utils.toArray('.linha-timeline').forEach((linha: any) => {
      gsap.set(linha, {
        transformOrigin: 'top 0',
        xPercent: -50,
        x: 0,
      });

      gsap.fromTo(
        linha,
        {
          scaleY: 0,
        },
        {
          scaleY: 0.5,
          scrollTrigger: {
            trigger: linha,
            start: 'top 59%',
            end: 'top 59.8%',
            toggleActions: 'play reverse play reverse',
            scrub: true,
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
            start: 'top 48%',
            end: 'top 47.9%',
            toggleActions: 'play reverse play reverse',
            scrub: 2,
          },
        },
      );
    });

    gsap.utils.toArray('.linha-timeline').forEach((linha: any) => {
      gsap.set(linha, {
        transformOrigin: 'top 0',
        xPercent: -50,
        x: 0,
      });

      gsap.fromTo(
        linha,
        {
          scaleY: 0,
        },
        {
          scaleY: 0.5,
          scrollTrigger: {
            trigger: linha,
            start: 'top 35%',
            end: 'top 34.8%',
            toggleActions: 'play reverse play reverse',
            scrub: true,
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
      data: 'Fev de 2013 - Nov de 2014',
      descricao:
        'Responsável pelo recebimento, preparar e encaminhar documentos e produtos logísticos, emitir notas fiscais e tirar copias e auxilio na esteira de produção na fabrica. E atuação no frente de loja como caixa.',
      linha: 'linha-timeline',
    },
    {
      titulo: 'Gera3 Sistemas',
      cargo: 'Estagiário de apoio técnico',
      data: 'Jan de 2015 - Dez de 2015',
      descricao:
        'Coleta e manutenção de banco de dados; Assistência em eventuais dúvidas, erros ou incidentes, via sistema ou banco de dados; Instalação e configuração de terminal cliente e/ou reinstalação do sistema em servidor.',
      linha: 'linha-timeline',
    },
    {
      titulo: 'Gera3 Sistemas',
      cargo: 'Suporte técnico',
      data: 'Abr de 2016 - Out de 2021',
      descricao:
        'Auxilio no atendimento ao cliente, atualização do produto da empresa nos clientes e backup de banco de dados.',
      linha: 'linha-timeline',
    },
    {
      titulo: 'Grupo Boticário',
      cargo: 'Analista de implantação',
      data: 'Out de 2021 - Atual',
      descricao:
        'Responsável por configuração e implantação de sistemas como Varejo Facil, SysPDV e PDX para franqueados do Grupo Boticário.',
    },
  ]);
}
