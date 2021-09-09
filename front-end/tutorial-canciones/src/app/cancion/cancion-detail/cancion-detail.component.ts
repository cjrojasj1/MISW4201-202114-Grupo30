import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/usuario/usuario';
import { Cancion } from '../cancion';
import { CancionService } from '../cancion.service';

@Component({
  selector: 'app-cancion-detail',
  templateUrl: './cancion-detail.component.html',
  styleUrls: ['./cancion-detail.component.css']
})
export class CancionDetailComponent implements OnInit {

  @Input() cancion: Cancion;
  @Output() deleteCancion = new EventEmitter();

  userId: number;
  token: string;
  displayedColumns: string[] = ['titulo', 'anio', 'medio'];
  compartidos: Array<Usuario>
  displayedColumnsCompartidos: string[] = ['index', 'nombre'];

  constructor(
    private cancionService: CancionService,
    private router: ActivatedRoute,
    private routerPath: Router
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.router.snapshot.params.userId)
    this.token = this.router.snapshot.params.userToken

  }

  eliminarCancion(){
    this.deleteCancion.emit(this.cancion.id)
  }

  goToEdit(){
    this.routerPath.navigate([`/ionic/canciones/edit/${this.cancion.id}/${this.userId}/${this.token}`])
  }

  getUsuariosCompartidos() {
    let f_compartidos: Array<any> = []
    let u_compartidos: Array<any> = []
    this.cancionService.getUsuariosCompartidos()
      .subscribe(compartidos => {
        compartidos.map(c => {
          // Todo: no mostrar el usuario actual
          // if (!cancionesAlbum.includes(c.id)) {
          //   cancionesNoAgregadas.push(c)
          // }

          f_compartidos.push(c)
        })
      })

      console.log(f_compartidos)

    this.compartidos = f_compartidos.map(t=>t.usuario_destino_id)
  }

}
