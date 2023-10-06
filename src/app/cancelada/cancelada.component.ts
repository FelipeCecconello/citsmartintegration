import { Component, OnInit } from '@angular/core';
import { CitSmartApiService } from '../cit-smart-api.service';

@Component({
  selector: 'app-cancelada',
  templateUrl: './cancelada.component.html',
  styleUrls: ['../app.component.css']
})
export class CanceladaComponent implements OnInit {
  canceladaData: any[] = [];
  token!: string;

  constructor(private citSmartApiService: CitSmartApiService) {}

  ngOnInit(): void {

    this.citSmartApiService.login('desafiodev', 'desafi0Dev1@').subscribe((loginResponse) => {
      if (loginResponse && loginResponse.sessionID) {
        console.log(loginResponse.sessionID);
        this.token = loginResponse.sessionID;
        this.citSmartApiService.getCanceladaData(this.token).subscribe((data) => {
          this.canceladaData = data;
        });
      }
    });
  }
}
