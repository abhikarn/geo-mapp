import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AppBaseComponent } from '@app/app-core';

@Component({
    selector: 'app-pagination',
    template: ` <p-paginator rows={{rows}} totalRecords={{total}} pageLinkSize="3" [rowsPerPageOptions]="[8, 16, 24]"
                [styleClass]="'paginator'" (onPageChange)="paginate($event)"></p-paginator>
                <div class="paginator-count">
                    <p class="mb-0">{{first}} <span>to</span> {{last}} <span>of</span> {{total}}</p>
                </div>`
})

export class PaginationComponent extends AppBaseComponent implements OnInit {
    first = 1;
    @Input()
    rows = 8;
    last: number;
    @Input()
    total: number;
    @Output()
    pageUpdate: EventEmitter<Event> = new EventEmitter<Event>();

    constructor() {
        super();
    }

    ngOnInit() {
        this.last = this.rows;
        this.last = (this.last > this.total) ? this.total : this.last;
    }

    paginate(event) {
        this.first = event.first + 1;
        this.last = +event.first + +event.rows;
        this.last = (this.last > this.total) ? this.total : this.last;
        this.pageUpdate.emit(event);
    }
}
