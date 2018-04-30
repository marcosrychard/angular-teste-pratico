import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnswersService } from '../answers/answers.service';
import { Answer } from '../answers/answer.model';
import { Quiz } from './quiz.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizFormComponent implements OnInit {


  private answer = new Answer;
  private questions: Array<Quiz>;
  private formulario: FormGroup;

  constructor
    (
    private formBuilder: FormBuilder,
    private quizService: QuizService,
    private answersService: AnswersService,
    private route: Router
  ) {
    this.formulario = this.formBuilder.group({
      QUESTION_RADIO_BUTTON1: [null, Validators.required],
      QUESTION_RADIO_BUTTON2: [null, Validators.required],
      QUESTION_RADIO_BUTTON3: [null, Validators.required],
      select1: [null, Validators.required],
      select2: [null, Validators.required],
      select3: [null, Validators.required],
      select4: [null, Validators.required],
    });
  }
  

  ngOnInit() {
    this.findAllQuestionsQuiz();
  }

  onSubmit() {
    this.answerQuiz()
    console.log(this.formulario)
  }

  answerQuiz() {
    this.answer.optionAnswered = new Array

    let options = [
      this.formulario.controls.QUESTION_RADIO_BUTTON1,
      this.formulario.controls.QUESTION_RADIO_BUTTON2,
      this.formulario.controls.QUESTION_RADIO_BUTTON3
    ]

    //define os valores para os radio da questão 1-3
    for (let i = 0; i < options.length; i++) {
      this.answer.optionAnswered.push(options[i].value)
    }

    //define os valores para os selects da questão 4
    this.answer.subject = [
      { key: "FUNDOS DE INVESTIMENTO", value: this.formulario.controls.select1.value },
      { key: "AÇÕES A VISTA", value: this.formulario.controls.select2.value },
      { key: "ALUGUEL DE AÇÕES TERMOS OPÇÕES E FUTUROS", value: this.formulario.controls.select3.value },
      { key: "TITULOS DE RENDA FIXA OU TESOURO DIRETO", value: this.formulario.controls.select4.value }]

    this.answersService.saveAnswer(this.answer).subscribe(
      response => {
        this.route.navigate(['answers', response._id])
      })
  }

  findAllQuestionsQuiz() {
    this.quizService.findAllQuestionsQuiz().subscribe(response => {
      this.questions = response;
    })
  }
}
