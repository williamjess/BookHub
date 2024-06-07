import { Component } from '@angular/core';
import { WebService } from './web.service';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  reviewForm: any;
  book_list: any = []
  page: number =1;

  constructor(public webService: WebService,
    private formBuilder: FormBuilder) {}

  
  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      name: '',
      review: '',
      stars: 5
      });
    if (sessionStorage['page']) {
      this.page = Number(sessionStorage['page']);
      }


    this.book_list = this.webService.getBook(this.page);
    }

    previousPage() {
      
      if (this.page > 1) {
        this.page = this.page - 1;
        this.book_list =
        this.webService.getBooks(this.page);
        }
      
    }
    nextPage() {

      this.page = this.page + 1;
      sessionStorage['page'] = this.page;
      this.book_list =
      this.webService.getBooks(this.page);
      }


    }



