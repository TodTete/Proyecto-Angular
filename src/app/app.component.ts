import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListItemIcon, MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { BaseComponent } from './features/base/base.component';
import { DistanceComponent } from './features/distance/distance.component';
import { SpeedsComponent } from './features/speeds/speeds.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatListModule, MatToolbarModule, RouterLinkActive, RouterLink, MatIcon, BaseComponent, DistanceComponent, SpeedsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('typingTitle') typingTitle!: ElementRef;
  @ViewChild('typingDescription') typingDescription!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.typingTitle && this.typingTitle.nativeElement instanceof HTMLElement) {
      this.applyTypingEffect(this.typingTitle.nativeElement);
    }

    if (this.typingDescription && this.typingDescription.nativeElement instanceof HTMLElement) {
      this.applyTypingEffect(this.typingDescription.nativeElement);
    }
  }

  private applyTypingEffect(element: HTMLElement): void {
    const text = element.innerHTML;
    element.innerHTML = '';
    let i = 0;
    const type = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(type);
      }
    }, 50);
  }
}