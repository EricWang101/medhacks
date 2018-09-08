import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';
import { MainComponent } from './main/main.component';

import { FormsModule } from '@angular/forms';
import { DocterViewComponent } from './docter-view/docter-view.component'; // <-- NgModel lives here

import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router/src/router';

const routes: Routes = [
  { path: 'edit', component: MainComponent },
  { path: 'view', component: DocterViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DocterViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
