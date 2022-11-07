
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'gestion', loadChildren: () =>
      import('./pages/gestion/gestion.module').then(m => m.GestionModule)
  },
  {
    path: 'products', loadChildren: () =>
      import('./pages/products/products.module').then(m => m.ProductsModule)
  },
  { path: '', redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
