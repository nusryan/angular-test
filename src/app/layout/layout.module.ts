import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component'
import { HeaderComponent } from '../components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [],
  declarations: [
    DefaultLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,

  ]
})
export class LayoutModule { }
