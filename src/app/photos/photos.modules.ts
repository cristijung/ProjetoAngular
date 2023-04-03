//em 'photos', que será o feature module. Nele, 
//criaremos um módulo que irá declarar não só PhotoComponent, 
//mas todos os outros componentes que dizem respeito a imagens, e app.module.ts importará este módulo nele mesmo.

import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations: [ PhotoComponent ],
    exports: [ PhotoComponent ]
})
export class PhotosModule {}

