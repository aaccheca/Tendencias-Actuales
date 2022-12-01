import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProductComponent } from '../pages/product/product.component';
import { CatalogueComponent } from '../pages/catalogue/catalogue.component';
import { PagesComponent } from '../pages/pages.component';

const routes: Routes = [
  //rutas hijas
  {
  path: '',
  component: PagesComponent,
  children: [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path:'', redirectTo:'/dashboard', pathMatch:'full'},
  ]
  },
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
