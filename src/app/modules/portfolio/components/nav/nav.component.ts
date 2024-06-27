import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SafeHtmlPipe } from '../main/SafeHtml.pipe';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatSlideToggleModule, SafeHtmlPipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(private sharedService: SharedService) {}

  public toggle() {
    const tema = document.body.classList.toggle('dark-theme');
    this.sharedService.changeData(tema);
  }
}
