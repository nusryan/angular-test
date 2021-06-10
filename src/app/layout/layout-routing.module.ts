import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { TablePageComponent } from '../table-page/table-page.component';
import { DirectivePageComponent } from '../directive-page/directive-page.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent },
    ]
  },
  {
      path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'table-page', component: TablePageComponent, data: { animation: 'TablePage' } },
      { path: 'directive-page', component: DirectivePageComponent, data: { animation: 'DirectivePage' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
