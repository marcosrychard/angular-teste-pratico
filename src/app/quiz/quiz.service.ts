import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Quiz } from './quiz.model';

@Injectable()
export class QuizService {


  //private apiUrl: string = 'http://www.mocky.io/v2/5ae3e0e3310000390d083f52'
  //private apiUrl: string = 'http://localhost:3000/quizzes'
  private apiUrl: string = 'https://api-angular-teste-pratico.herokuapp.com/quizzes'
  constructor(private http: Http) { }

  findAllQuestionsQuiz(): Observable<Quiz[]> {
    return this.http.get(this.apiUrl)
      .map(response => response.json())
      .catch(error => {
        throw new Error(error.message)
      })
  }

  findQuizByItem(item: String): Observable<Quiz> {
    const url = `${this.apiUrl}/search/?items=${item}`;
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => {
        throw new Error(error.message)
      })
  }
}
