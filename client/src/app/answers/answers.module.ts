import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswersComponent } from './answers.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AnswersService } from './answers.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [AnswersComponent],
  exports: [AnswersComponent],
  providers: [AnswersService]
})
export class AnswersModule { }
