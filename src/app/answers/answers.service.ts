import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Answer } from './answer.model';

@Injectable()
export class AnswersService {

//private apiUrl: string = 'http://localhost:3000/answers'
  private apiUrl: string = 'https://api-angular-teste-pratico.herokuapp.com/answers'

  constructor(private http: Http) { }

  saveAnswer(answer: Answer): Observable<Answer> {
    return this.http.post(this.apiUrl, answer)
      .map(response => response.json())
      .catch(error => {
        throw new Error(error.message)
      })
  }
  findByIdAnswer(id: String): Observable<Answer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => {
        throw new Error(error.message)
      })
  }


}
