import { Component, Input } from '@angular/core';
import { IProjectDetails } from '../../../models/IProjectDetail';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input() projectDetails! : IProjectDetails
}
