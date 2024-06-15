import { SafeResourceUrl } from '@angular/platform-browser';

export interface IPost {
  icone?: string;
  iconeLink?: string;
  projeto?: [
    {
      href?: string;
      deploy?: string;
    },
  ];
  link?: string;
  textoIcone?: string;
  titulo?: string;
  textoDialog?: string;
  texto?: string;
  data: string;
  alt: string;
  src: string | SafeResourceUrl;
  informacao?: string;
}
