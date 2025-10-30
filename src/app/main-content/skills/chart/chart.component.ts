import { Component, ElementRef, Input, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements AfterViewInit, OnDestroy {
  @Input() percentage = 0;
  @Input() category = '';

  @ViewChild('donut', { static: true }) donut!: ElementRef<HTMLElement>;
  @ViewChild('host',  { static: true }) host!: ElementRef<HTMLElement>;

  current = 0;
  observer?: IntersectionObserver;
  animated = false;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting && !this.animated) {
          this.animated = true;
          this.playAnimation();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  playAnimation() {
    const element = this.donut.nativeElement;
    element.style.setProperty('--percent', '0%');
    element.offsetWidth;
    element.style.setProperty('--percent', `${this.percentage}%`);

    const targetPercent = Math.max(0, Math.min(100, Math.round(this.percentage)));
    const duration = 2000;
    const startTime = performance.now();
    const tick = (time: number) => {
      const progress = Math.min(1, (time - startTime) / duration);
      const currentPercent = Math.round(targetPercent * this.easeOutQuad(progress));
      this.current = currentPercent;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  easeOutQuad(progress: number){ 
    return 1 - (1 - progress) * (1 - progress);
  }

}


