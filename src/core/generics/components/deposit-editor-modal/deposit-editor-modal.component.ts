import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {DepositFormBuilder} from "../../interfaces/form/deposit-form-builder.interface";
import {IServiceGeneric} from "../../interfaces/service.generic.interface";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-deposit-editor-modal',
  templateUrl: './deposit-editor-modal.component.html',
  styleUrls: ['./deposit-editor-modal.component.scss']
})
export class DepositEditorModalComponent implements OnInit {
  @Input() formBuilder?: DepositFormBuilder;
  @Input() service?: IServiceGeneric;
  @Input() editMode = false
  @Input() customForm = false;
  @Input() title?:string;
  @Input() object?:any;
  @Input() extraContent?: TemplateRef<any>;
  @Output() isOpenChange = new EventEmitter();
  @Output() onSubmitForm = new EventEmitter();

  openValue = false
  public get isOpen() {
    return this.openValue;
  }
  @Input() set isOpen(val: any) {
    this.openValue = val;
    if (val) {
      setTimeout(() => {
        const element = document.getElementById('input_0');
        if (element) {
          element.focus();
        }
      }, 1);
    }
    this.isOpenChange.emit(this.openValue);
  }

  constructor(private sno: SnotifyService) { }

  ngOnInit(): void {
  }
  editObject(data: any){
    if(!this.object){return;}
    this.service?.update(this.object.id, data).subscribe({
      next: res => {
        this.sno.success(this.service?.updateNotify ?? '')
        this.isOpen = false
        this.service?.updateRequested.next(null);
      }
    })
  }
  addObject(data: any){
    this.service?.create(data).subscribe({
      next: res => {
        this.sno.success(this.service?.addNotify ?? '')
        this.isOpen = false
        this.service?.updateRequested.next(null);
      }
    })
  }
  onSubmit(formValue: any){
    if(this.customForm){
      this.onSubmitForm.emit(formValue);
      return;
    }
    if(this.editMode){
     this.editObject(formValue)
      return
    }
    this.addObject(formValue)
  }

}
