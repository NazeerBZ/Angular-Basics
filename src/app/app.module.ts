// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
// import { ChildComponent } from './child.component';
// import { HomeComponent } from './component/home/home.component';
// import { ContentComponent } from './component/content/content.component';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HelloComponent,
//     ChildComponent,
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router'; 

import { MainComponent } from './component/main/main.component';
import { HomeComponent } from './component/home/home.component';
import { ContentComponent } from './component/content/content.component';
import { appRoutes } from './component/app.routes';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)  
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }





