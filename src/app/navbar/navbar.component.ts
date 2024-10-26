import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <div class="flex bg-black justify-center p-4">
        <ul class="flex text-white space-x-8 text-right w-fit">
            <li class="hover:underline decoration-2 cursor-pointer">الرئيسية</li>
            <li class="hover:underline decoration-2 cursor-pointer">الشهادات والدورات</li>
            <li class="hover:underline decoration-2 cursor-pointer">طرق التدريب</li>
            <li class="hover:underline decoration-2 cursor-pointer">الفروع</li>
            <li class="hover:underline decoration-2 cursor-pointer">اتصل بنا</li>
            <li class="hover:underline decoration-2 cursor-pointer">دورات اون لاين</li>
            <li class="hover:underline decoration-2 cursor-pointer">دورات مدفوعة من هدف</li>
        </ul>
    </div>
  `,
  styles: ``
})
export class NavbarComponent {

}
