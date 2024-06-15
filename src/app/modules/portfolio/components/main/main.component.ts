import { Component, ViewEncapsulation } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FeedComponent } from './feed/feed.component';
import { ProjectsComponent } from './projects/projects.component';
import { SobreComponent } from './sobre/sobre.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatTabsModule,
    FeedComponent,
    ProjectsComponent,
    SobreComponent,
    ExperienciasComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent {
  activeTab: string = 'Publicacoes';

  onTabClick(tab: string) {
    this.activeTab = tab;
  }

  onKeydown(event: KeyboardEvent, tab: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onTabClick(tab);
    }
  }
}
