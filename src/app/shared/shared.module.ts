import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickBarComponent } from './stick-bar/stick-bar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [StickBarComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [StickBarComponent, FooterComponent],
  exports: [StickBarComponent, FooterComponent],
})
export class SharedModule { }
