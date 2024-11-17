import { Component, Input } from '@angular/core';
import { IProjectDetails } from '../../../models/IProjectDetail';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input() projectDetails! : IProjectDetails
}
