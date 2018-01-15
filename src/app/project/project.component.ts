import { statusChange } from './animations';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '../projects/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    statusChange
  ]
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Output() statusUpdated = new EventEmitter<string>();
  @Output() projectDeleted = new EventEmitter<void>();
  statusState = 'default';

  constructor() { }

  ngOnInit() {
  }

  onUpdateStatus(newStatus: string) {
    this.statusState === 'default' ? this.statusState = 'newstate' : this.statusState = 'default';
    this.statusUpdated.emit(newStatus);
  }

  onDelete() {
    this.projectDeleted.emit();
  }

  getPrjStatusClass() {
    return {
      'label-success': this.project.status === 'active',
      'label-default': this.project.status === 'inactive',
      'label-danger': this.project.status === 'critical'
    };
  }
}
