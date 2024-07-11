
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../../model/api-response';


@Component({
  selector: 'app-introducao',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './introducao.component.html',
  styleUrl: './introducao.component.scss',
})
export class IntroducaoComponent implements OnInit{
  public dados? : ApiResponse;

  constructor(private http:HttpClient) { }

  ngOnInit(): void{
    this.getDados();
  }
public getDados(){
  this.http.get<ApiResponse>('https://hitdigital.com.br/test.php').subscribe(
    (resp:ApiResponse)=>{
      this.dados = resp.data;
      if (this.dados) {
        this.dados.status = resp.data.status;
        this.dados.title = resp.data.title;
        this.dados.text = resp.data.text;
      }
    }
  )
}
}
