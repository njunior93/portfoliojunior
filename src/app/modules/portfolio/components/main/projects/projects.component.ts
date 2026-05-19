import { Component, signal } from '@angular/core';
import { IPost } from '../../../interface/Post.interface';
import { PostComponent } from '../../../shared/post/post.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  public arrayProjects = signal<IPost[]>([
    {
      texto: 'Aqui nasceu um "FullStack"',
      textoDialog: 'O Agenda Fácil nasceu como um projeto para fortalecer meus conhecimentos como desenvolvedor fullstack. Quis criar algo que realmente simulasse um sistema usado no dia a dia, então desenvolvi uma aplicação completa de agendamentos, gerenciamento de clientes e serviços, utilizando React, TypeScript, NestJS e TypeORM. Durante o desenvolvimento, consegui praticar desde a criação da interface até regras de negócio, API e banco de dados.',
      src: 'assets/posts/agenda-facil.jpg',
      data: '19 Mai 2026',
      projeto: [
        {
          href: 'https://github.com/njunior93/agenda-facil-front_end',
          deploy: 'https://agenda-facil-ten.vercel.app',
        },
      ],
      alt: 'Imagem do projeto Agenda Facil',
      iconeLink:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd"></path></svg>',
    },
    {
      texto: 'Grande Ideia',
      textoDialog: 'A ideia surgiu numa conversa com um amigo: fazer entregas de hortifruti para fast foods pela cidade. E pensei: "consigo fazer um sistema pra isso", E fiz! Desenvolvi uma aplicação completa com gerenciamento de estoque, criação de pedidos e geração de relatórios, tudo usando <b>React, TypeScript e NestJS + TypeORM</b>. O projeto já está quase finalizado (uns 95%) e ficou bem próximo de um sistema real, pensado para uso no dia a dia. Então é só clicar em uma das opções abaixo e conferir',
      src: 'assets/posts/projeto_hotifacil.jpg',
      data: '25 Set 2025',
      projeto: [
        {
          href: 'https://github.com/njunior93/horti_facil',
          deploy: 'https://horti-facil.vercel.app/',
        },
      ],
      alt: 'Imagem do projeto HortFacil',
      iconeLink:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd"></path></svg>',
    },    
    {
      texto: 'Esse me tirou da zona de conforto',
      informacao:
        '<a href="https://drive.google.com/file/d/1FD3y-1erQM-LB_XhE-cIRCxiNPUKfAcX/view?usp=sharing" target="_blank">🔗 /Video</a>',
      textoDialog:
        'Esse eu posso falar que foi um grande desafio, atuando com situações de Back-End. Como sempre não lidando com a ansiedade de colocar em pratica o que ando aprendendo, resolvi de imediato fazer algo com Express e Fetch API. Que me tiraram da zona de conforto. Yup e Formik, Material Ui e o framework Tailwind CSS para responsividade, foram novidades que eu usei também na aplicação. <b>ATENÇÃO!</b> Infelizmente o servidor aonde se encontra hospedado a API fica offline por inatividade. Devido a isso, a funcionalidade da aplicação pode ser vista através do link.  ',
      src: 'assets/posts/cadastroCRUD.jpg',
      data: '29 Fev 2024',
      projeto: [
        {
          href: 'https://github.com/njunior93/sistema-de-cadastro',
          deploy: 'https://sistema-de-cadastro-jade.vercel.app/',
        },
      ],
      alt: 'Imagem do projeto CRUD',
      iconeLink:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd"></path></svg>',
    },
    {
      texto: 'Dor de cabeça',
      textoDialog:
        'Foi aqui que eu virei a chave. Pela a primeira vez usando uma Ferramenta, na verdade o famoso combo: React + TypeScript. Me lembro como se fosse ontem. MUITAS noites mal dormidas e muito estresse. Praticamente tudo era novo pra mim; a logica de programação, framework e etc. Mas foi muito bom. Adquiri muita experiência quebrando a cabeça para entrengar um modesto "ToDo List" com responsividade.',
      src: 'assets/posts/todolist.jpg',
      data: '08 Jan 2024',
      projeto: [
        {
          href: 'https://github.com/njunior93/to-do-list',
          deploy: 'https://todolistreact-ivory.vercel.app/',
        },
      ],
      alt: 'Imagem do projeto de "ToDolist"',
      iconeLink:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd"></path></svg>',
    },
    {
      texto: 'mini PROJETOS',
      textoDialog:
        'Somente para consolidar o conhecimento em JavaScript criei três aplicações: <a class="font-bold" target="_blank" href="https://calculadoraimc-phi.vercel.app/">Calculadora IMC</a>, <a class="font-bold" target="_blank" href="https://cadastro-aluno-murex.vercel.app/">CRUD</a> e <a class="font-bold" target="_blank" href="https://todolist-iota-self.vercel.app/">ToDo List</a>',
      src: 'assets/posts/miniprojetos.jpg',
      data: '19 Set 2023',
      projeto: [
        {
          href: 'https://github.com/njunior93/mini-projetos',
          deploy: '',
        },
      ],
      alt: 'Imagem do projeto de IMC',
      iconeLink:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd"></path></svg>',
    },
    {
      texto: 'Meu primeiro CRUD',
      textoDialog:
        'Enquanto eu fazia alguns cursos de JavaScript, em paralelo eu montava esse "projeto". Nenhum Framework utilizado. Conhecimento sobre a linguagem era pouco mas a ansiedade em fazer algo era maior.',
      src: 'assets/posts/sistemacadastro.jpg',
      data: '15 Ago 2023',
      projeto: [
        {
          href: 'https://github.com/njunior93/cadastro-clientes',
          deploy: 'https://cadastro-clientes-nine.vercel.app/',
        },
      ],
      alt: 'Foto do projeto de sistema de cadastro',
      iconeLink:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd"></path></svg>',
    },
    {
      texto: 'Portfolio de uma estudante de Geografia',
      textoDialog:
        'Que nostalgia! Foi a primeira pagina ou algo que eu fiz colocando em pratica o que eu sabia na epoca. "Ele so tinha conhecimento em HTML e CSS e um sonho".',
      src: 'assets/posts/projetoannecatherine.jpg',
      data: '11 Jul 2023',
      projeto: [
        {
          href: 'https://github.com/njunior93/portfolioanne',
          deploy: 'https://portfolioannecatherine.vercel.app/',
        },
      ],
      alt: 'Foto do Projeto Portifolio Anne Catherine',
      iconeLink:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd"></path></svg>',
    },
  ]);


}
