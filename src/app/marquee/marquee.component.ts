import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-[#FEBA13] text-[#0A5F91] text-2xl font-bold overflow-hidden flex justify-start">
        <div class="text-nowrap w-fit justify-center flex animate-carousel hover:[animation-play-state:paused] overflow-visible py-3">
            @for (msg of news; track $index) {
                <p class="mr-5 flex items-center">
                    {{ msg }}
                    <svg class="mr-5" width="25" height="25" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0513 1.08743H22.9258V8.80042L28.927 2.79926L35.2022 9.07446L29.1379 15.1387H36.9771V24.0132H29.2641L35.2427 29.9918L28.9675 36.267L22.9258 30.2253V38.0644H14.0513V30.2253L8.00961 36.267L1.73441 29.9918L7.71305 24.0132H6.10352e-05V15.1387H7.83918L1.77496 9.07446L8.05016 2.79926L14.0513 8.80042V1.08743ZM14.9016 15.989C12.8799 18.0106 12.8799 21.2884 14.9016 23.31C16.9233 25.3317 20.201 25.3317 22.2227 23.31C24.2443 21.2884 24.2443 18.0106 22.2227 15.989C20.201 13.9673 16.9233 13.9673 14.9016 15.989Z" fill="#0A5F91"/>
                    </svg>
                </p>
            }
            @for (msg of news; track $index) {
                <p class="mr-5 flex items-center">
                    {{ msg }}
                    <svg class="mr-5" width="25" height="25" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0513 1.08743H22.9258V8.80042L28.927 2.79926L35.2022 9.07446L29.1379 15.1387H36.9771V24.0132H29.2641L35.2427 29.9918L28.9675 36.267L22.9258 30.2253V38.0644H14.0513V30.2253L8.00961 36.267L1.73441 29.9918L7.71305 24.0132H6.10352e-05V15.1387H7.83918L1.77496 9.07446L8.05016 2.79926L14.0513 8.80042V1.08743ZM14.9016 15.989C12.8799 18.0106 12.8799 21.2884 14.9016 23.31C16.9233 25.3317 20.201 25.3317 22.2227 23.31C24.2443 21.2884 24.2443 18.0106 22.2227 15.989C20.201 13.9673 16.9233 13.9673 14.9016 15.989Z" fill="#0A5F91"/>
                    </svg>
                </p>
            }
        </div>
    </div>
  `,
  styles: ``
})
export class MarqueeComponent {
    news = [
        "معسكر المسار التأسيسي للأمن السيبراني — متاح التسجيل الآن!",
        "نرحب بجميع المستويات التعليمية",
        "انضم الآن واحصل على خصم 30%!",
        "نرحب بجميع المستويات التعليمية",
    ]
}
