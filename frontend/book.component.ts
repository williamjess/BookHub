import { Component } from "@angular/core";
import { WebService } from "./web.service";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
   })
   export class BookComponent {
    book_list: any;
    constructor(public webService: WebService,
                private route: ActivatedRoute) {}
    ngOnInit() {
    this.book_list = this.webService.getBook (
        this.route.snapshot.params['id'] );

    
    }
   }