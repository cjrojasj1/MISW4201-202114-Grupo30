import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/usuario/usuario';
import { Album } from '../album';
import { AlbumShareComponent } from '../album-share/album-share.component';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  @Input() album: Album;
  @Output() deleteAlbum = new EventEmitter();

  displayedColumns: string[] = ['index', 'name', 'duracion', 'interprete'];
  userId: number;
  token: string;
  users_names: string;
  compartidos: Array<Usuario>
  displayedColumnsCompartidos: string[] = ['index', 'nombre'];

  constructor(
    private albumService: AlbumService,
    private routerPath: Router,
    private router: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.router.snapshot.params.userId)
    this.token = this.router.snapshot.params.userToken
    this.getUsuariosCompartidos()

    console.log(this.compartidos)
  }

  goToEdit(){
    this.routerPath.navigate([`/ionic/albumes/edit/${this.album.id}/${this.userId}/${this.token}`])
  }

  goToJoinCancion(){
    this.routerPath.navigate([`/ionic/albumes/join/${this.album.id}/${this.userId}/${this.token}`])
  }

  eliminarAlbum(){
    this.deleteAlbum.emit(this.album.id)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlbumShareComponent, {
      width: '250px',
      data: {
        users_names: this.users_names,
        album_id: this.album.id,
        titulo: this.album.titulo,
        userId: this.userId,
        token: this.token
      }
    });
  }

  getUsuariosCompartidos() {
    let f_compartidos: Array<any> = []
    let u_compartidos: Array<any> = []
    this.albumService.getUsuariosCompartidos()
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
