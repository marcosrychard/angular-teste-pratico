import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { QuizService } from './quiz.service';
import { AppRoutingModule } from '../app-routing.module';
import { QuizFormComponent } from './quiz.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [QuizFormComponent],
  exports: [QuizFormComponent],
  providers: [QuizService]
})
export class QuizModule { }
