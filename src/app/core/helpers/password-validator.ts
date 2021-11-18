import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (!control.value) {
            //if control is empty return no error
            return null!;
        }

        //check the value of the control agains regex supplied
        const valid = regex.test(control.value);

        return valid ? null! : error!;
    }
}
