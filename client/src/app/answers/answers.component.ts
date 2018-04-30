import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { AnswersService } from './answers.service';
import { Quiz } from '../quiz/quiz.model';
import { Answer } from './answer.model';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  private questions: Array<Quiz>;
  private id: String = this.router.snapshot.params['id']
  private answer = new Answer

  constructor
    (
    private quizService: QuizService,
    private router: ActivatedRoute,
    private answersService: AnswersService
    ) { }
  ngOnInit() {
    //this.findAllQuestionsQuiz();
    this.findByIdAnswer()
  }

  findByIdAnswer() {
    this.answersService.findByIdAnswer(this.id).subscribe(
      response => {
        this.answer = response;
        console.log(this.answer)
        this.findAllQuestionsQuiz();
      })
  }

  findAllQuestionsQuiz() {
    this.quizService.findAllQuestionsQuiz().subscribe(response => {
      this.questions = response;
    })
  }
}
