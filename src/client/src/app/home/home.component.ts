import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private formulario: FormGroup;

  constructor
    (
    private formBuilder: FormBuilder,
    private route: Router
    ) {
    this.formulario = this.formBuilder.group({
      accept: [null, Validators.required]
    });
  }


  ngOnInit() {
  }

  onSubmit(): void {
    if (this.formulario.status === 'INVALID') {
      this.formulario.get('accept').markAsTouched()
    } else if (this.formulario.get('accept').value) {
      this.route.navigate(['/answers/5ae604ceb0b37504b4c0f8b0'])
    }
  }

}
