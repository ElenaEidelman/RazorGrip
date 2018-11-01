import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Jsonp, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataConfigService {

  constructor(private jsonp: Jsonp) { }

  getImages():Observable<any>{
    const url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&format=json&jsoncallback=JSONP_CALLBACK';
    return this.jsonp.request(url)
    .pipe(map(data => {
      let images = data["_body"].items;
      return images.map(function(img:any) {
        return {title: img.title, link: img.media.m, date: img.date_taken, description:img.description,published:img.published};
      });
    }));
  }
}
