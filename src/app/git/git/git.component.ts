import { Component, OnInit } from '@angular/core';
import { GitService } from "../git.service";
import { CommandeGit } from "../commandeGit";

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit {
  commandes: CommandeGit[] | undefined;

  constructor(
    private gitService: GitService
  ) { }

  ngOnInit(): void {
    this.getCommandes();
  }

  getCommandes(){
    this.gitService.getCommandes().subscribe(
      commandes => this.commandes = commandes
    )
  }
}
