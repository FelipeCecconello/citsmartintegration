import { Component, OnInit } from '@angular/core';
import { CitSmartApiService } from '../cit-smart-api.service';

@Component({
  selector: 'app-fechada',
  templateUrl: './fechada.component.html',
  styleUrls: ['../app.component.css']
})
export class FechadaComponent implements OnInit {
  fechadaData: any[] = [];
  token!: string;

  constructor(private citSmartApiService: CitSmartApiService) {}

  ngOnInit(): void {

    this.citSmartApiService.login('desafiodev', 'desafi0Dev1@').subscribe((loginResponse) => {
      if (loginResponse && loginResponse.sessionID) {
        console.log(loginResponse.sessionID);
        this.token = loginResponse.sessionID;
        this.citSmartApiService.getFechadaData(this.token).subscribe((data) => {
          this.fechadaData = data;
        });
      }
    });
  }
}
