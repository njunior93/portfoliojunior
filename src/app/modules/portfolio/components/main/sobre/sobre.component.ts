import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent implements OnInit {
  tema: boolean | undefined;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentData.subscribe((dados) => {
      this.tema = dados;
    });
  }
}
