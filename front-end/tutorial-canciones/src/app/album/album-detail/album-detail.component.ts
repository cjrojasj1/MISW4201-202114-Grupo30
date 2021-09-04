import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from '../album';

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

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.router.snapshot.params.userId)
    this.token = this.router.snapshot.params.userToken
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

}
