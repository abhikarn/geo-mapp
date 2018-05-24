import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';
import { ModalConfig } from '../modal-config';
@Component({
    selector: 'app-save-dialog',
    template: `<p-confirmDialog header="{{modalConfig.title}}" [closable]="true" #sd>
    <p-footer>
      <button type="button" pButton label="OK" (click)="sd.accept()" class="mr-4"></button>
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

