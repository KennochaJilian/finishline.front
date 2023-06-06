import { Inject, Injectable } from '@angular/core';
import { SnotifyService } from 'ng-snotify';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private snotifyService: SnotifyService) {
  }

  manageErrors(vm: any): any {
    this.snotifyService.error("Aie une erreur est survenue")
  }
  //   if (vm?.hasErrors) {
  //     const messages = ErrorHelper.extractErrorMessages(vm);
  //     messages.forEach((message) => {
  //       setTimeout(() => {
  //         this.snotifyService.error(message);
  //       })
  //     });
  //   }
  //   return vm;
  // }
}
