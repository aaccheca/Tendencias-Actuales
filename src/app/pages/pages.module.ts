import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProductComponent } from '../pages/product/product.component';
import { CatalogueComponent } from '../pages/catalogue/catalogue.component';
import { PagesComponent } from '../pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  DashboardComponent, //sale error porque se los debe importar
  ProductComponent,
  CatalogueComponent,
  PagesComponent,
  ],
  exports: [ //para que se usen fuera de este modulo
  DashboardComponent,
  ProductComponent,
  CatalogueComponent,
  PagesComponent,],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class PagesModule { }
