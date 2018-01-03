import { Component } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FileService } from './file.service';
import { MyFile } from './MyFile';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
  providers: [FileService],
})


export class FileComponent implements OnInit{
  title = 'File Uploader!';
  public url:string = 'http://localhost:8080';
  public uploader:FileUploader = new FileUploader({url: this.url});

  constructor(private fileService: FileService){ }

  selectedFile: MyFile;

  files=[];

  ngOnInit(){
    this.showfiles();
  }

  showfiles(){
    this.fileService.getData().
      then((res)=>{
        this.files=[];
        console.log(res);
        for(var i=0; i < res['files'].length; i++ ){
          this.files.push(res['files'][i]);
        }
      }).catch(err=> {
        console.log(err);
      });
  }

  onSelect(file: MyFile){
    this.selectedFile=file;
    //this.appService.download(file.filename.toString());
  }

  jump(file: MyFile){
    this.selectedFile=file;
    if(file.kind=="folder"){
      this.fileService.jump(file.filename.toString()).
        then((res)=>{
          this.files=[];
          for(var i=0; i < res['files'].length; i++ ){
            this.files.push(res['files'][i]);
          }
      }).catch(err=> {
        console.log(err);
      });
    }
  }

  newfolder(foldername: String){
    this.fileService.newfolder(foldername.toString()).
    then((res)=>{
      this.files=[];
      for(var i=0; i < res['files'].length; i++ ){
        this.files.push(res['files'][i]);
      }
    }).catch(err=> {
      console.log(err);
    });
  }

  goback(){
    this.fileService.goback().
    then((res)=>{
      this.files=[];
      for(var i=0; i < res['files'].length; i++ ){
        this.files.push(res['files'][i]);
      }
    }).catch(err=> {
      console.log(err);
    });
  }

  delete(file: MyFile){
    this.fileService.deletefile(file.filename, file.kind).
    then((res)=>{
      this.files=[];
      for(var i=0; i < res['files'].length; i++ ){
        this.files.push(res['files'][i]);
      }
    }).catch(err=> {
      console.log(err);
    });
  }


}
