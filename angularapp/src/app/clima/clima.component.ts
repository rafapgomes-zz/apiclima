import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private http : HttpClient) {}
  title = 'previsaotempo';
  cidade: string = ''
  temperatura: number = 0
  humidade: number = 0
  data: string = ""
  display = 'listview'
  tempo: string = ""
  local: string = ""
  resultado: string = ""
  dirvento: string = ""
  vento: number = 0
  imagem: string = ""


  
 async getDados(){
    
  const params = {
    access_key: '56ef3200f90307a23e9597a3cba4a23d',
    query: this.cidade,
    
    }

   var objeto = await this.http.get("http://api.weatherstack.com/current",{params}).toPromise()
   return JSON.parse(JSON.stringify(objeto))

}

getImagem(img:string)
{
  return img = "transparent url('" + img + "')"
}
  async previsao(){

     const objeto = await this.getDados();
     console.log(objeto)
     this.temperatura = objeto.current.temperature
     this.humidade = objeto.current.humidity
     this.data = objeto.location.localtime
     this.local = objeto.location.name + "," + objeto.location.region + "," + objeto.location.country
     this.vento = objeto.current.wind_speed
     this.dirvento = objeto.current.wind_dir
     this.imagem = await this.getImagem(objeto.current.weather_icons[0])
     console.log(this.imagem)
     this.display = "block"
   
     
    }
   
  }

