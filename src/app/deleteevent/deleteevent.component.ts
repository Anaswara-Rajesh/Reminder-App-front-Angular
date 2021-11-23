import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent implements OnInit {

  @Input() item:string | undefined

  @Output() onDelete = new EventEmitter

  @Output() onCancel = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.onDelete.emit(this.item)
  alert("deleting......")
  }
  cancel(){
    this.onCancel.emit(this.item)
  alert("cancelling.....")
  }
  }
  
