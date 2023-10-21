import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatExpansionComponent} from '../components/mat-expansion/mat-expansion.component';
import {ExpansionComponent} from '../components/expansion/expansion.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ChildExpansionComponent } from 'src/components/childexpansion/childexpansion.component';

const routes: Routes = [
  { path: 'expansion', component: ExpansionComponent },
  { path: 'mat-expansion', component: MatExpansionComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MatExpansionComponent,
    ExpansionComponent,
    ChildExpansionComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    [RouterModule.forRoot(routes)],
    CommonModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
