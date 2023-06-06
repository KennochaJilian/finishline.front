import { NgModule } from '@angular/core';
import { DepositModalComponent } from './components/deposit-modal/deposit-modal.component';
import {ClrCheckboxModule, ClrInputModule, ClrModalModule, ClrTextareaModule} from "@clr/angular";
import {CommonModule} from "@angular/common";
import { DepositFormComponent } from './components/deposit-form/deposit-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DepositEditorModalComponent } from './components/deposit-editor-modal/deposit-editor-modal.component';
import { DepositUploadFileComponent } from './components/deposit-upload-file/deposit-upload-file.component';
import { DepositDeleteModalComponent } from './components/deposit-delete-modal/deposit-delete-modal.component';

@NgModule({
    imports: [
        ClrModalModule,
        CommonModule,
        ClrInputModule,
        FormsModule,
        ReactiveFormsModule,
        ClrTextareaModule,
        ClrCheckboxModule,
    ],
    exports: [
        DepositModalComponent,
        DepositFormComponent,
        DepositEditorModalComponent,
        DepositUploadFileComponent,
        DepositDeleteModalComponent,

    ],
  declarations: [
    DepositModalComponent,
    DepositFormComponent,
    DepositEditorModalComponent,
    DepositUploadFileComponent,
    DepositDeleteModalComponent,
  ]
})
export class GenericsModule { }
