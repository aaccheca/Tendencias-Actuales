import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { RegisterComponent } from '../auth/register/register.component';
import { ProductComponent } from '../pages/product/product.component';
import { CatalogueComponent } from '../pages/catalogue/catalogue.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { PagesComponent } from '../pages/pages.component';
import { PagesModule } from '../pages/pages.module';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';

const routes:Routes = [
  {path:'', component: PagesComponent, children: [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'catalogue', component: CatalogueComponent },
  ]},
  {path:'dashboard', component: DashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'product', component: ProductComponent},
  {path:'catlogue', component: CatalogueComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component: NotfoundComponent},
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), PagesRoutingModule,AuthRoutingModule],
  exports: [RouterModule]
})


export class AppRoutingModule { }
