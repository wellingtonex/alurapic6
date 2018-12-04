import { environment } from './../../../environments/environment';
import { Component, Input } from '@angular/core';


const API_URL = environment.ApiUrl + /imgs/;

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {

    private _url = '';

    @Input() description = '';

    @Input() set url(url: string)  {
        if (!url.startsWith('data')) {
            this._url = API_URL + url;
        } else {
            this._url = url;
        }
    }

    get url() {
        return this._url;
    }
}
