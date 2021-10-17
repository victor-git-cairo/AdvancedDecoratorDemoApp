import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css']
})
export class MusicDetailsComponent implements OnInit {
//  property declared as input property
 @Input() musicianName: string | undefined;

 @Output() newMusicianEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  addNewArtist(val: string) {
    this.newMusicianEvent.emit(val)
  }
}
