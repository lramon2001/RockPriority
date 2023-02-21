import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Banda } from '../objetos/Banda';
import { BandaService } from '../services/banda.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id: any;
  textoBotao: string = 'salvar';
  editando: boolean = false;
  banda: Banda = new Banda(0, " ", 0, 0, 0);

  constructor(
    private routerModule: RouterModule,
    private activateRoute: ActivatedRoute,
    private bandaService: BandaService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(p => {
      if (p['id']) {
        this.id = p['id'];
        this.textoBotao = 'editar';
        console.log(`Id enviado: ${this.id}`)
        this.editando = true;
        this.bandaService.buscarPorId(this.id).subscribe(
          banda => {
            this.banda = banda;
          }
        )
      }
      alert(this.id);
    });
  }

  adicionar = () => {
    if(!this.editando){
    this.bandaService.adicionar(this.banda).subscribe(
      sucess => alert("A banda Foi adicionada com sucesso"),
      error => alert("Erro adicionar a banda"),)
    this.router.navigate(['home'])
    alert("Vocês são meus amigos do coração!")
    }
    else{
      this.atualizar();
    }
    this.router.navigate(['home'])
  }

  atualizar = () => {
    this.bandaService.atualizar(this.banda).subscribe(
      success => alert('A banda foi atualizada com sucesso'),
      error => alert("Erro ao atulizar a banda"),
      () => console.log("Requisição completa"))
    this.router.navigate(['home'])
  }

}
