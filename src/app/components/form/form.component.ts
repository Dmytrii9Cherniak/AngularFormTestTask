import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../validators/confirmPasswordValidator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern('^(?=.*[A-ZА-Я])(?!.*\\s).{8,}$')]],
        confirmPassword: ['', [Validators.required]],
        privacyPolicy: [false, [Validators.required, Validators.requiredTrue]]
      }, { validators: [confirmPasswordValidator()] });
  }

  public getFormData(): void {
    console.table(this.form.value);
    this.form.reset();
  }
}
