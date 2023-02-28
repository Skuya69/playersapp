import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayersService } from '../players.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players$!: Observable<Player[]>;

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.players$ = this.playersService.getPlayers();
  }

}

