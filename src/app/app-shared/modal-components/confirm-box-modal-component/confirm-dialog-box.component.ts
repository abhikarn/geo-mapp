import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';
import { ModalConfig } from './confirm-dialog-box.component';
@Component({
    selector: 'app-confirm-dialog',
    template: `<p-confirmDialog header="Confirm" icon="fa fa-question-circle" width="600" #cd>
    <p-footer>
      <button type="button" pButton icon="fa-close" label="yes" (click)="cd.accept()" class="mr-4"></button>
      <button type="button" pButton icon="fa-check" label="no" (click)="cd.reject()"></button>
    </p-footer>
  </p-confirmDialog> `
})

export class ConfirmDialogComponent implements OnInit {
    @Output() onAccept = new EventEmitter();
    @Output() onReject?= new EventEmitter();
    @Input() modalConfig: ModalConfig;
    constructor(private confirmationService: ConfirmationService) {
    }

    ngOnInit() {
    }

    showModal() {
        this.confirmationService.confirm({
            message: this.modalConfig.message,
            accept: () => {
                this.onAccept.emit();
            },
            reject: () => {
                this.onReject.emit();
            }
        });
    }
}

export interface ModalConfig {
    message: string;
}
