import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AnswersComponent } from './answers/answers.component';
import { QuizFormComponent } from './quiz/quiz.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quizzes', component: QuizFormComponent },
    { path: 'answers/:id', component: AnswersComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}