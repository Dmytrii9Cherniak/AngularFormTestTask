import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmPasswordValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.root.get('password');
    const confirmPassword = control.root.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { confirmPasswordMismatch: true };
    }

    return null;
  };
}
