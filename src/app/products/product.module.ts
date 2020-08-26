import { NgModule } from '@angular/core';
import { ProductComponent } from './products.component';
import { ProductsDetailGuard } from './products-detail.guard';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './products-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
   ],
  imports: [
   
    RouterModule.forChild([
      { path: 'products', component: ProductComponent},

      { path: 'products/:id',
        canActivate: [ProductsDetailGuard],
        component:ProductDetailComponent 
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
