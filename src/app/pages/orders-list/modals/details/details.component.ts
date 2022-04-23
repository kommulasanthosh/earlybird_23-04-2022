import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() orderDetails;
  @Input() isPacked;
  @Output() packedEmit: EventEmitter<boolean> =  new EventEmitter();


  constructor(
    private activeModel: NgbActiveModal
  ) { }

  ngOnInit(): void {
    
  }

  printscrn(){
    return window.print();
  }

  close(){
    this.activeModel.close();
  
  }

  packed() {
    this.packedEmit.emit(true);
    this.activeModel.close();
  }

}
