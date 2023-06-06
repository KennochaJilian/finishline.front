import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class DownloadService {
  authorizedExtensions = [
    '.avi', '.gif', '.jpg', '.jpeg', '.m4a',
    '.ai', '.eps', '.png', '.tif', '.indd', '.svg',
    '.mov', '.mp3', '.mp4', '.mpg', '.mpeg',
    '.wav', '.wmv', '.xls', '.xlsx', '.csv',
    '.xlt', '.xltm', '.xltx', '.xps',
    '.doc', '.docm', '.docx',  '.dot', '.dotx', '.pdf',
    '.pot', '.potm', '.potx', '.ppam', '.pps', '.pptx',
    '.ppt', '.ppsm', '.psd', '.ini', '.iso', '.pub',
    '.rtf', '.sldm', '.sldx', '.txt',
  ]

  constructor(private http: HttpClient) {}

  download(url: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob'
    })
  }

  canBeUploaded(filename:string):boolean{
    const ext = this.getFileExtension(filename);
    if(ext == null){
      return false;
    }
    return this.authorizedExtensions.includes(`.${ext}`);
  }
  getFileExtension(filename: string): string | null {
    const ext = /^.+\.([^.]+)$/.exec(filename);
    return ext == null ? "" : ext[1];
  }

}
