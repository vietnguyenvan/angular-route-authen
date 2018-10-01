import { ICategory } from './../model/category';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';


const categories: ICategory[] = [{ id: 1, name: "Bread" },
    { id: 2, name: "Cake" },
    { id: 3, name: "Noodle" }
]
@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor() { }

    getCategories(): Observable<ICategory[]> {
        return of(categories);
    }
}
