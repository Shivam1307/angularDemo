import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService {
    constructor(private _http: Http) {

    }
    getDetails() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        return this._http.get(url).map(response => response.json());
        // return this._http.get(url);
    }


}
