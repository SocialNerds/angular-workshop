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

  constructor(private repoService: RepoService) { }

  ngOnInit() {
    this.repoService.getRepositories("SocialNerds")
    .subscribe((repositories) => {
      this.repositories = repositories
    })
  }
}
