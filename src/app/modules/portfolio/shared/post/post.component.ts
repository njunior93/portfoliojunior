import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IPost } from '../../interface/Post.interface';
import { SafeHtmlPipe } from '../../components/main/SafeHtml.pipe';
import { SafeUrlPipe } from '../../components/main/SafeUrl.pipe';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogProjectsComponent } from '../../components/main/projects/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatCardModule,
    SafeHtmlPipe,
    SafeUrlPipe,
    DialogProjectsComponent,
    MatDialogModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() post: IPost = {
    titulo: '',
    data: '',
    texto: '',
    src: '',
    alt: '',
    textoIcone: '',
    iconeLink: '',
    textoDialog: '',
    link: '',
    projeto: [{ deploy: '', href: '' }],
    informacao: '',
  };

  #dialog = inject(MatDialog);

  public openDialog(data: IPost) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: 'dialog-container',
    });
  }

  onKeydown(event: KeyboardEvent, data: IPost) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openDialog(data);
    }
  }
}
