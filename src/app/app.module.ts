import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechadaComponent } from './fechada/fechada.component';
import { EmAndamentoComponent } from './em-andamento/em-andamento.component';
import { CanceladaComponent } from './cancelada/cancelada.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    FechadaComponent,
    EmAndamentoComponent,
    CanceladaComponent,
    DetalhesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
