import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiRoute } from '../../api/api.links';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  public data = {
    category: "",
    home_type: 0,
    type: "exclusive",
    address: 0,
    apartment_number: "",
    price: "",
    maintenance: "",
    taxes: "",
    common_charges: "",
    beds: 0,
    bathrooms: 0,
    rooms: 0,
    square_foot: 0,
    description: "",
    amenity: [
      0
    ],
    tags: "",
    verified: true,
    is_published: true,
    agent: 0,
    videos: [''],
    images: [''],
  }

  public step: number;
  public homeTypes: object;
  public amenities: object;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) {
  }

  ngOnInit() {
    this.step = 1;
  }

  public changeStep(where) {
    if (where === 'next') {
      this.step += 1;
    } else {
      this.step -= 1;
    }
  }

  public submitForm() {

    let token = this.cookieService.get('token');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('authorization', 'Bearer ' + token);

    console.log(this.data);

    this.http.post(apiRoute('listings'), this.data, { headers: headers })
      .pipe(
        tap((data) => {
          alert('Сохранено');
        }),
        catchError(this.handleError())
      )
      .subscribe();
  }

  private getHometypes() {
    this.homeTypes = this.http.get(apiRoute('hometypes'))
      .pipe(
        tap((data)=>{ this.homeTypes = data }),
        catchError(this.handleError())
      )
      .subscribe();
  }

  private getAmenities() {
    this.homeTypes = this.http.get(apiRoute('amenities'))
      .pipe(
        tap((data)=>{ this.homeTypes = data }),
        catchError(this.handleError())
      )
      .subscribe();
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error);
      alert('Введены некорректные данные');
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
