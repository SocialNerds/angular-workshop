import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositories: Repo[]
  githubUser: string
  loading: boolean
  errorCode: number

  constructor(private repoService: RepoService) { }

  ngOnInit() {
    this.loadReposForUser();
  }

  loadReposForUser() {
    if (!this.githubUserMissing()) { 
      this.initLoading();
      this.repoService.getRepositories(this.githubUser)
        .subscribe(
          // on results returned
          repositories => {
            this.repositories = repositories;
          },
          // on errors
          (error) => {
            this.finishLoading();
            this.errorCode = error.status;
            console.log(error);
          },
          // on complete
          () => {
            this.finishLoading();
          }
        );
    }
  }

  githubUserMissing() {
    return this.githubUser === undefined || 
           this.githubUser === null || 
           this.githubUser === '';
  }

  initLoading() {
    this.loading = true;
    this.repositories = [];
    this.errorCode = null;
  }

  finishLoading() {
    this.githubUser = null;
    this.loading = false;
    this.errorCode = null;
  }
}
