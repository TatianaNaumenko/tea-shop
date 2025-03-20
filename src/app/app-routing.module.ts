import { CatalogComponent } from './views/products/catalog/catalog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/home/main/main.component';
import { CreateOrderComponent } from './views/create-order/create-order.component';
import { TeaDetailsComponent } from './views/products/tea-details/tea-details.component';


const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'catalog', component:CatalogComponent},
  {path:'order', component:CreateOrderComponent},
  {path:'tea-details/:id', component: TeaDetailsComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
