import { routeFadeStateTrigger, routeSlideStateTrigger } from './../shared/route-animations';
import { Component, OnInit, HostBinding } from '@angular/core';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';
import { markedTrigger, itemStateTrigger, slideStateTrigger, listStateTrigger } from './animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    markedTrigger,
    itemStateTrigger,
    slideStateTrigger,
    // routeFadeStateTrigger,
    routeSlideStateTrigger,
    listStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  @HostBinding('@routeSlideState') routeAnimation = true;
  // @HostBinding('@routeFadeState') routeAnimation = true;
  projects: Project[];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
        }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    console.log(index);
    this.projects.splice(index, 1);
    console.dir(this.projects);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    setTimeout(() => {
      this.projects.push(project);
    }, 300);
  }
}
