import { Component } from '@angular/core';
import { LucideAngularModule, ArrowLeft } from "lucide-angular"

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [LucideAngularModule],
    template: `
        <div class="bg-neutral-300 flex flex-col p-20 items-center">
            <div class="flex justify-center gap-8">
                <h1 class="text-3xl font-bold">معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية المتخصصة في تقنية المعلومات. المزيد</h1>
                <img src="abadnet logo.png" />
            </div>
            <button class="bg-[#FEBA13] w-fit p-4 mt-10 font-bold flex gap-2 items-center hover:bg-black hover:text-white transition-all group">إلى جدول المواعيد <lucide-icon class="group-hover:mr-1 transition-all" [img]="ArrowLeft" [size]="18"></lucide-icon></button>
        </div>
    `,
    styles: ``
})
export class HeroComponent {
    readonly ArrowLeft = ArrowLeft;
}
