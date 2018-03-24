import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { Repo } from './repo'

@Injectable()
export class RepoService {

  private url: string = "https://api.github.com"
  constructor(private http: HttpClient) {}

  getRepositories(username): Observable<Repo[]> {
    return this.http.get(`${this.url}/users/${username}/repos`)
      .map(this.loadData)
  }

  private loadData(res: Array<object>): Repo[] {
    let data = res.map((repo: any) => {
      return {
        name: repo.name, 
        language: repo.language, 
        url: repo.html_url,
      }
    })

    return data || []
  }
}
