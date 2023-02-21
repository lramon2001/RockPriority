import { Component } from '@angular/core';
import { Banda } from '../objetos/Banda';
import { BandaService } from '../services/banda.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bandasList: any;
  bandas: Array<Banda> =[]
  constructor(private bandaService: BandaService, private router: Router) {}

  ngOnInit(): void{

    this.bandaService.listar().subscribe(banda=>{
      this.bandas = banda;
      console.log(this.bandas);
    })

    }

    excluirItem =(id:any)=>{
      this.bandaService.excluir(id).subscribe(
        success => alert(`O elemento com id: ${id} foi excluido com sucesso`),
        error => alert(`Erro ao excluir o elemento com id:${id}`)
      )
      this.ngOnInit();
    }

    atualizar = (id:any) =>{
      alert(id);
      this.router.navigate(['cadastro',id,]);
    }

  }

