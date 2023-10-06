import { Component, OnInit } from '@angular/core';
import { CitSmartApiService } from '../cit-smart-api.service';

@Component({
  selector: 'app-em-andamento',
  templateUrl: './em-andamento.component.html',
  styleUrls: ['../app.component.css']
})
export class EmAndamentoComponent implements OnInit {
  emAndamentoData: any[] = [];
  token!: string;

  constructor(private citSmartApiService: CitSmartApiService) {}

  ngOnInit(): void {

    this.citSmartApiService.login('desafiodev', 'desafi0Dev1@').subscribe((loginResponse) => {
      if (loginResponse && loginResponse.sessionID) {
        console.log(loginResponse.sessionID);
        this.token = loginResponse.sessionID;
        this.citSmartApiService.getEmAndamentoData(this.token).subscribe((data) => {
          this.emAndamentoData = data;
        });
      }
    });
  }
}