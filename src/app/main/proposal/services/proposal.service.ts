import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { environment } from "environments/environment";

const api_url = environment.apiUrl + "/api/proposals/";
const api_url_upload = environment.apiUrl + "/api/v1/proposals/upload";

@Injectable({
  providedIn: "root"
})
export class ProposalService {
  routeParams: any;
  
  constructor(private http: HttpClient) {}

  private authorizationHeader() {
    const token = window.localStorage.getItem(`token@${environment.appName}`);
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return headers;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;
    console.log("resolve with params : " + JSON.stringify(this.routeParams));
    if (this.routeParams.id) {
      if (this.routeParams.id !== "new") {
        return this.getProposalData(this.routeParams.id);
      }
    } else {
      return this.getProposalDataList();
    }
  }

  getProposalDataList(){
    return this.http
    .get(api_url, {
      headers: this.authorizationHeader()
    });
  }

  // getProposalData(id:any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.http
  //       .get(api_url + id, {
  //         headers: this.authorizationHeader()
  //       })
  //       .subscribe(res => {
  //         console.log(res);
  //       }, reject);
  //   });
  // }
  getProposalData(id: any) {
    return this.http.get(api_url + id, {
      headers: this.authorizationHeader()
    });
  }

  uploadProposalData(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(api_url_upload,formData);
  }

  createProposalData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(api_url, body, { headers: this.authorizationHeader() })
        .subscribe((res: any) => {
          // this.getProposalDataList();
          resolve(res.data);
        }, reject);
    });
  }

  updateProposalData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .put(api_url + body._id, body, { headers: this.authorizationHeader() })
        .subscribe((res: any) => {
          // this.getProposalDataList();
          resolve(res.data);
        }, reject);
    });
  }

  deleteProposalData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .delete(api_url + body._id, { headers: this.authorizationHeader() })
        .subscribe((res: any) => {
          // this.getProposalDataList();
          resolve(res.data);
        }, reject);
    });
  }
}
