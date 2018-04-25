import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';
import { ModalConfig } from './save-dialog-box.component';
@Component({
    selector: 'app-save-dialog',
    template: `<p-confirmDialog header="Confirm" icon="fa fa-question-circle" width="600" #sd>
    <p-footer>
      <button type="button" pButton icon="fa-close" label="ok" (click)="sd.accept()" class="mr-4"></button>
    </p-footer>
  </p-confirmDialog> `
})

export class SaveDialogComponent implements OnInit {
    @Output() onAccept = new EventEmitter();
    // @Output() onReject?= new EventEmitter();
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
            // reject: () => {
            //     this.onReject.emit();
            // }
        });
    }
}

export interface ModalConfig {
    message: string;
}
