import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { DataService } from './services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { PageComponent } from './components/page/page.component';
import { NavComponent } from './components/nav/nav.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NewbookComponent } from './components/newbook/newbook.component';
import { UpdateformComponent } from './components/updateform/updateform.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PageComponent,
    NavComponent,
    LoadingComponent,
    NewbookComponent,
    UpdateformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents: [UpdateformComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
