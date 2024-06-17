import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Howl } from 'howler';
import { repeat } from 'rxjs';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnInit  {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      message: ['', Validators.required],
    });
  }

  ngOnInit(){
    if(window.innerWidth <= 768){
      const logocapa = document.getElementById('logocapa');
      const olhodireito = document.getElementById('direito');
      const olhoesquerdo = document.getElementById('esquerdo');

      gsap.to(logocapa,{
        repeat: -1,
        x: '+=5',
        ease: 'power1.inOut',
        yoyo: true,
        repeatDelay: 1.7    
      });
      
      gsap.to(olhodireito,{
        y:'+=2',
        x: '+=5',
        scaleY: 0.1,
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        repeatDelay: 2

      });
      
      gsap.to(olhoesquerdo,{
        y:'+=2',
        x: '+=5',
        scaleY: 0.1,
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        repeatDelay: 2

      });

    }
  }

  ngAfterViewInit() {
    const logocapa = document.getElementById('logocapa');
    const olhodireito = document.getElementById('direito');
    const olhoesquerdo = document.getElementById('esquerdo');
    const svg = document.getElementById('container-svg');
    const olhos = document.getElementById('olhos');
    const som = new Howl({
      src: ['assets/sounds/sound.mp3'],
      volume: 1.5,
      rate: 1.7,
    });

    logocapa?.addEventListener('click', () => {
      som.play();

      gsap.fromTo(
        logocapa,
        {
          scale: 0.18,
          rotation: 15,
        },
        {
          duration: 2,
          rotation: 0,
          scale: 1,
          ease: 'elastic(0.83, 0.38)',
        },
      );
      gsap.fromTo(
        olhos,
        {
          scale: 3,
          rotation: 2,
        },
        {
          duration: 2,
          rotation: 2,
          scale: 1,
          ease: 'elastic(2, 1)',
        },
      );
    });

    const eyeMovementRadius = 20;

    document.addEventListener('mousemove', (e) => {
      if(window.innerWidth >= 768){
        const svgRect = svg?.getBoundingClientRect();
        const logoRect = logocapa?.getBoundingClientRect();
        if (logocapa && olhodireito && olhoesquerdo && svgRect && logoRect) {
          const mouseX = e.clientX - svgRect.left;
          const mouseY = e.clientY - svgRect.top;

          const posicaoolhoesquerdo = { x: 358, y: 128 };
          const posicaoolhodireito = { x: 398, y: 128 };

          const dxLeft =
            ((mouseX - posicaoolhoesquerdo.x) / logoRect.width) * 2;
          const dyLeft =
            ((mouseY - posicaoolhoesquerdo.y) / logoRect.height) * 3;
          const dxRight =
            ((mouseX - posicaoolhodireito.x) / logoRect.width) * 2;
          const dyRight =
            ((mouseY - posicaoolhodireito.y) / logoRect.height) * 3;

          const distanceLeft = Math.sqrt(dxLeft * dxLeft + dyLeft * dyLeft);
          const distanceRight = Math.sqrt(dxRight * dxRight + dyRight * dyRight);

          const moveLeftX =
            Math.min(eyeMovementRadius, distanceLeft) *
            (dxLeft / distanceLeft || 0);
          const moveLeftY =
            Math.min(eyeMovementRadius, distanceLeft) *
            (dyLeft / distanceLeft || 0);

          const moveRightX =
            Math.min(eyeMovementRadius, distanceRight) *
            (dxRight / distanceRight || 0);
          const moveRightY =
            Math.min(eyeMovementRadius, distanceRight) *
            (dyRight / distanceRight || 0);

          gsap.to(olhoesquerdo, {
            duration: 0.5,
            cx: posicaoolhoesquerdo.x + moveLeftX,
            cy: posicaoolhoesquerdo.y + moveLeftY,
            ease: 'power2.out',
          });
          gsap.to(olhodireito, {
            duration: 0.5,
            cx: posicaoolhodireito.x + moveRightX,
            cy: posicaoolhodireito.y + moveRightY,
            ease: 'power2.out',
          });
        }
      }
      
    });
  }

  sendEmailText() {
    setTimeout(() => {
      this.submitted = false;
    }, 3000);
  }

  send() {
    this.submitted = true;

    const msg = this.form.get('message')?.value;
    emailjs.init('KtaYqY2WrXivMqEaA');
    emailjs.send('service_9z1n3at', 'template_xdajk9b', {
      message: msg,
    });

    this.form.reset();
    this.sendEmailText();
  }

  // select(s: any) {
  //   document.querySelector(s);
  // }

  // selectAll(s:any){
  //   return document.querySelectorAll(s);
  // }
}
