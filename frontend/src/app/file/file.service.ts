import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FileService{

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get("/files/index")
      .toPromise();
  }

  jump(file: String){
    return this.http.get("/files/jump",{
      params:{
        "filename": file.toString()
      }
    }).toPromise();

  }

  newfolder(foldername: String){
    return this.http.get("/files/newfolder",{
      params:{
        "foldername": foldername.toString()
      }
    }).toPromise();
  }

  goback(){
    return this.http.get("/files/goback").toPromise();
  }

  deletefile(file: String, kind: String){
    return this.http.get("/files/delete",{
      params:{
        "filename": file.toString(),
        "kind": kind.toString()
      }
    }).toPromise();
  }

}
