
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';

@Injectable()
export class UploadService {
  public url: string;


  constructor(private _http: Http) {
    this.url = environment.url;
   }
//token: string,
   makeFileRequest(url: string, params: Array<string>, files: Array<File>,  name: string){
      return new Promise(function(resolve, reject){
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();

        for(var i = 0; i < files.length; i++){
          formData.append(name, files[i], files[i].name);
        }

        xhr.onreadystatechange = function(){
          if(xhr.readyState == 4){
            if (xhr.status == 200) {
              resolve(JSON.parse(xhr.response));
            } else {
              reject(xhr.response);
            }
          }
        }

        xhr.open('POST', url, true);
   //     xhr.setRequestHeader('Authorization', token);
        xhr.send(formData);

      });
    }

}
