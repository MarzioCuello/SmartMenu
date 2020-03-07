import { ToastrService as extToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../shared/confirmation-modal/confirmation-modal.component';


@Injectable()
export class ToastrService {
    options: any;

    constructor(public toastr: extToastrService, private _NgbModal: NgbModal) {
    }

    success(title, text) {
      this.toastr.success(text, title);
    }

    error(title, text) {
      this.toastr.error(text, title);
    }

    warning(title, text) {
      this.toastr.warning(text, title);
    }

    info(title, text) {
      this.toastr.info(text, title);
    }





    modal(title, text, okText:string = 'Aceptar', declineText:any = 'Cancelar') {
      /*
      if (!document.getElementsByTagName("jaspero-confirmations")[0].classList.contains('hide-modal-cancel') && declineText == '')
        document.getElementsByTagName("jaspero-confirmations")[0].className += ' hide-modal-cancel';

      let config = {
        confirmText: okText,
        declineText: declineText,
        overlayClickToClose: false
      }
      let r = this.confirm.create(title, text, config);
      r.subscribe(res => {
        document.getElementsByTagName("jaspero-confirmations")[0].className = document.getElementsByTagName("jaspero-confirmations")[0].className.replace("hide-modal-cancel","");
        if (res.resolved)
          s.next(true);
        else
          s.next(false);
      })
      */
      let s = new Subject();


      const modalRef = this._NgbModal.open(ConfirmationModalComponent, {
        windowClass: 'modal-job-scrollable not-full-width',
        backdrop: 'static'
      });
      modalRef.componentInstance.title = title;
      modalRef.componentInstance.text = text;
      modalRef.componentInstance.okText = okText;
      modalRef.componentInstance.declineText = declineText;

      modalRef.componentInstance.subject = s;
      (() => {
        const node: HTMLElement | null = document.querySelector('app-ng-modal');
        if (node) {
          while (node.firstChild) {
            (node.parentNode as HTMLElement).insertBefore(node.firstChild, node);
          }
        }
      })();
      s.subscribe(res => {
        modalRef.close();
      })

      return s;
    }

    dismissModal() {
      let buttons = document.getElementsByClassName('jaspero__confirmation_dialog-actions')[0];
      if (buttons) (buttons.childNodes[2] as HTMLElement).click();
    }
}
