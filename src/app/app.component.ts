import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { MarqueeComponent } from "./marquee/marquee.component";
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="flex flex-col w-full h-fit text-right">
        <app-navbar class="w-full content-center"/>
        <app-marquee />
        <app-hero />
    </div>
  `,
  imports: [NavbarComponent, MarqueeComponent, HeroComponent],
})
export class AppComponent {
}
