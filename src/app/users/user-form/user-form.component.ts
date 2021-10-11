import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import * as dayjs from "dayjs";
import {UsersService} from "../users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormMode} from "../../shared/enums/form-mode.enum";
import {Education, User} from "../../shared/interfaces/user.interface";



export const restrictedDateValidator = (
  masterControlLabel: string,
  slaveControlLabel: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const masterControl = (control as FormGroup).controls[masterControlLabel];
    const slaveControl = (control as FormGroup).controls[slaveControlLabel];

    const diff = dayjs(masterControl.value).diff(dayjs(slaveControl.value))

    if(diff >= 0) {
      slaveControl.setErrors({ 'error': true });
      return { 'error': true };
    }
    slaveControl.setErrors(null);
    return null
  }
}


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  education: FormArray;
  id: number;
  public role: FormControl;
  public userData?: User;
  public mode: FormMode;
  public formModes = FormMode;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mode = this.route.snapshot.data.mode;

    this.userForm = new FormGroup({
      id: new FormControl(Math.floor(Math.random()*1000)),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      role: new FormControl('', Validators.required),
      info: new FormControl(''),
      education: this.formBuilder.array([])
    });

    this.education = this.userForm.controls.education as FormArray;
    this.role = this.userForm.controls.role as FormControl;

    if (this.mode === FormMode.CREATE) {
      // this.addEducation();
    }
    if (this.mode === FormMode.UPDATE) {
      this.getUserData();
      this.patchForm();
    }
  }


  public submit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const user = {...this.userForm.value};

    if (this.mode === FormMode.CREATE) {
      this.userService.createUser(user).subscribe(
        data => this.postSubmit()
      )
    } else {
      this.userService.updateUser(user).subscribe(
        data => this.postSubmit()
      );
    }
  }

  private postSubmit(): void {
    this.userForm.reset();
    this.router.navigate(['/users']).then()
  }

  public addEducation(education?: Education, isInitialValues: boolean = false): void {

    this.education.push(this.formBuilder.group({
      university: [isInitialValues ? education?.university : ''],
      entry_year: [isInitialValues ? education?.entry_year : ''],
      graduation_year: [isInitialValues ? (education?.graduation_year) : ''],
      specialization: [isInitialValues ? education?.specialization : '']
    }, {validators:[restrictedDateValidator('entry_year', 'graduation_year')]}))
  }

  public removeEducation(index: number): void {
    this.education.removeAt(index);
  }

  private getUserData(): void {
    this.userData = this.route.snapshot.data.user
  }

  private patchForm(): void {
    if (this.userData) {
      this.userForm.patchValue({
        id: this.userData.id,
        first_name: this.userData.first_name,
        last_name: this.userData.last_name,
        age: this.userData.age,
        email: this.userData.email,
        role: this.userData.role,
        info: this.userData.info,
      }, {onlySelf: true})

      this.userData.education?.forEach(education => this.addEducation(education, true));
    }
  }
}
