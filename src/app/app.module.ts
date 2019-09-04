import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiListCompComponent } from './api-list-comp/api-list-comp.component';
import { StudentServiceService } from './student-service.service';
import { InterceptorModule } from './interceptor/interceptor.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApiListCompComponent
  ],
  imports: [
    BrowserModule,InterceptorModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
