import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DepositFormBuilder} from "../../interfaces/form/deposit-form-builder.interface";
import {DepositField} from "../../interfaces/form/deposit-field.interface";
import {DepositFieldError} from "../../interfaces/form/deposit-field-error.interface";
import {OptInFormBuilder} from "./opt-in-form.builder";

@Component({
  selector: 'app-deposit-form',
  templateUrl: './deposit-form.component.html',
  styleUrls: ['./deposit-form.component.scss']
})
export class DepositFormComponent implements OnInit, OnChanges {
  @Input() object: any;
  @Input() formBuilder?: DepositFormBuilder;
  @Input() editMode = false;
  @Input() resetForm: boolean = false;
  @Output() submitted = new EventEmitter();
  @Output() resetted = new EventEmitter();


  files?: any[];

  depositForm: FormGroup;
  formFields?: DepositField[]
  currentErrors?: string[];


  constructor(private fb: FormBuilder) {
    this.depositForm = this.fb.group({})
  }

  ngOnInit(): void {
    this.hydrateForm()
    this.depositForm.valueChanges.subscribe({
      next : () => this.manageErrors()
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetForm'] && changes['resetForm'].currentValue) {
      this.reset();
    }
  }
  hydrateForm(){
    if(!this.formBuilder){return;}
    this.formFields = this.formBuilder.build()
    if(this.formBuilder.optIn != null && this.formBuilder.optIn){
      this.formFields.push(OptInFormBuilder.build())
    }
    for(const field of this.formFields){
      const validators = field.validators || [];
      const initialValue = this.editMode ? this.getInitialValue(field) : '';
      this.depositForm.addControl(field.name, new FormControl(initialValue, validators))
    }
    this.manageErrors()
  }

  getInitialValue(field: DepositField)
  {
    if(field.name in this.object){
      return this.object[field.name]
    }
  }
  manageErrors(){
    if (this.formFields == undefined){return;}
    const errors = this.formFields.flatMap(x => x.controlErrors)
    this.currentErrors = errors.map(x => x?.display ?? '');
  }
  onSubmit(){
    this.submitted.emit(this.depositForm.value)
  }
  reset() {
    this.depositForm.reset();
    Object.values(this.depositForm.controls).forEach(control => {
      control.markAsUntouched();
      control.setErrors(null);
    });
    this.resetted.emit(null)
  }



}
