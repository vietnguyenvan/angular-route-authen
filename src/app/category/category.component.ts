import { CategoryService } from './../service/category.service';
import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from '../model/category';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: ICategory[] = [];
  @Input('category') categoryName: string;

  constructor(private _service: CategoryService) { }

  ngOnInit() {
    this._service.getCategories().subscribe(cats => {
      this.categories = cats;
    });
  }

}
