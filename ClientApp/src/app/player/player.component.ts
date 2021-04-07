import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  public players: Player[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Player[]>(baseUrl + 'api/Player').subscribe(result => {
      this.players = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

interface Player {
  id: number;
  name: string;
  shirtNo: number;
  appearances: number;
  goals: number;
  positionName: number;
  goalsPerMatch: number;
}
