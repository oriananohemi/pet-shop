import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRecommendationsComponent } from './components/product-recommendations/product-recommendations.component';


@NgModule({
  declarations: [
    ProductListComponent,
    FilterComponent,
    ProductDetailComponent,
    ProductRecommendationsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
  ]
})
export class ProductsModule { }
