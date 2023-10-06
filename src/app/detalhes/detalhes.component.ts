import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitSmartApiService } from '../cit-smart-api.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['../app.component.css']
})
export class DetalhesComponent implements OnInit {
  dados: any[] = [];
  token!: string;
  constructor(private route: ActivatedRoute, private citSmartApiService: CitSmartApiService) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      const itemId = params['id'];
      this.citSmartApiService.login('desafiodev', 'desafi0Dev1@').subscribe((loginResponse) => {
        if (loginResponse && loginResponse.sessionID) {
          console.log(loginResponse.sessionID);
          this.token = loginResponse.sessionID;
          this.citSmartApiService.getItemById(this.token, itemId).subscribe((data) => {
            this.dados = data;
          });
        }
      });
    });
    
  }
}