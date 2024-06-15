import { Component, signal } from '@angular/core';
import { PostComponent } from '../../../shared/post/post.component';
import { IPost } from '../../../interface/Post.interface';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  public arrayPosts = signal<IPost[]>([
    {
      icone:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path fill="currentColor" d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z">Fixado</path>Fixado</svg>',
      textoIcone: 'Fixado',
      titulo: 'Seja Bem Vindo',
      data: '14 Jun de 2024',
      texto:
        'Esse é o meu portfolio aonde mostro minhas expertises e projetos pessoais que desenvolvo e venho desenvolvendo para colocar em pratica meus conhecimentos. E para mostrar um pouco sobre mim tambem. Fique a vontade.',
      src: 'assets/posts/juniorMuseuTecnologia.png',
      alt: 'Foto do Seja Bem vindo fixado',
    },
    {
      data: '18 Jan de 2024',
      texto:
        'Uma nova meta traçada para 2024. Para quem disse que nunca mais iria frequentar uma faculdade aqui estou procurando me especializar cada vez mais.',
      src: 'assets/posts/postgraduaçãounifanor.png',
      alt: 'Foto da matricula faculdade unifanor',
    },
    {
      data: '27 Out de 2023',
      informacao: '📍 São Paulo, Brasil',
      texto:
        'Encontro TECH Boticario – 2023 <a href="https://twitter.com/oBoticario?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" style="color:#0A66C2;">@oBoticario</a>',
      src: 'assets/posts/encontrotechboti.png',
      alt: 'Foto do encontro TECH Boticario',
    },
    {
      data: '23 Ago de 2023',
      informacao:
        '🔗 <a href="https://drive.google.com/file/d/1w16nEoejH5zriLaTaju0o9QsPs9JHb1I/view?usp=sharing" target="_blank"">/Reconhecimento</a>',
      texto:
        'Galera voces tem noção que eu tive meu trabalho reconhecido❤️ Reconhecimento e realização profissional sem tamanho!',
      src: 'assets/posts/postreconhecimento.png',
      alt: 'Reconhecimento da Boticario',
    },
  ]);
}
