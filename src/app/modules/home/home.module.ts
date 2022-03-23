import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact/contact.component';
import { PreviewProductsComponent } from './preview-products/preview-products.component';
import { MenSectionComponent } from './preview-products/men-section/men-section.component';
import { WomenSectionComponent } from './preview-products/women-section/women-section.component';
import { KidSectionComponent } from './preview-products/kid-section/kid-section.component';
import { ExploreProductsComponent } from './explore-products/explore-products.component';
import { SocialComponent } from './social/social.component';
import { CollectionComponent } from './collection/collection.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRouting } from './home-routing';



@NgModule({
  declarations: [
    CollectionComponent,
    ContactComponent,
    PreviewProductsComponent,
    MenSectionComponent,
    WomenSectionComponent,
    KidSectionComponent,
    ExploreProductsComponent,
    SocialComponent,
    HomeComponent 

  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRouting
  ]
})
export class HomeModule { }
