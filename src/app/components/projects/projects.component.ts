import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectList = [
    {
      "ProjectImageSource": "assets/images/Solar-System.webp",
      "ProjectImageAltText": "Solar System Image of website",
      "ProjectTitle": "Solar System",
      "ProjectDescription": "A static website showcasing our 'SOLAR SYSTEM' in the Milky Way Galaxy. It eliminates redundant data and provides a small yet powerful website for viewing overall data of the planets",
      "TechStackImageSources": [
        {
          "ImageSource": "assets/logos/html5.svg",
          "ImageAltText": "HTML5 logo"
        },
        {
          "ImageSource": "assets/logos/css3.svg",
          "ImageAltText": "CSS3 logo"
        }
      ],
      "SkillsLearnt": [
        "HTML5",
        "CSS3",
        "Website Layout Designing"
      ],
      "SourceCodeURL": "https://github.com/karthiksgujjar/SolarSystem",
      "LiveSiteURL": "https://karthiksgujjar.github.io/SolarSystem"
    },
    {
      "ProjectImageSource": "assets/images/SLS.webp",
      "ProjectImageAltText": "Simple Library Surfer desktop application's main form image",
      "ProjectTitle": "Simple Library Surfer",
      "ProjectDescription": "Created a robust .NET WinForms CRUD application for library management, enabling librarians to efficiently handle book data including insertion, deletion, updating, and viewing. Features PDF report generation and advanced book search functionality",
      "TechStackImageSources": [
        {
          "ImageSource": "assets/logos/dotnet.svg",
          "ImageAltText": "Microsoft .Net logo"
        },
        {
          "ImageSource": "assets/logos/csharp.svg",
          "ImageAltText": "C# icon"
        },
        {
          "ImageSource": "assets/logos/mysql.svg",
          "ImageAltText": "MySQL icon"
        }
      ],
      "SkillsLearnt": [
        "C#",
        "MySQL",
        ".NET (WinForms)",
        "Desktop Application Development"
      ],
      "SourceCodeURL": "https://github.com/karthiksgujjar/SLS",
      "LiveSiteURL": "https://karthiksgujjar.github.io/SLS/"
    },
    {
      "ProjectImageSource": "assets/images/PGMS.webp",
      "ProjectImageAltText": "Paying Guest Management System desktop application's main form image",
      "ProjectTitle": "Paying Guest Management System",
      "ProjectDescription": "A user-friendly Paying Guests Management software for PG building owners developed using .NET with C#. Streamlines guest and building management, replacing manual processes. Features staff management, guest admission/removal, fee collection, visitor tracking, and reporting",
      "TechStackImageSources": [
        {
          "ImageSource": "assets/logos/dotnet.svg",
          "ImageAltText": "Microsoft .Net logo"
        },
        {
          "ImageSource": "assets/logos/csharp.svg",
          "ImageAltText": "C# icon"
        },
        {
          "ImageSource": "assets/logos/mysql.svg",
          "ImageAltText": "MySQL icon"
        }
      ],
      "SkillsLearnt": [
        "C#",
        "MySQL",
        ".NET (WinForms)",
        "Desktop Application Development"
      ],
      "SourceCodeURL": "https://github.com/karthiksgujjar/PGMS",
      "LiveSiteURL": "https://karthiksgujjar.github.io/PGMS"
    },
    {
      "ProjectImageSource": "assets/images/CPU-Scheduling-Visualizer.webp",
      "ProjectImageAltText": "CPU Scheduling Demo Website's Homepage",
      "ProjectTitle": "CPU Scheduling Visualizer",
      "ProjectDescription": "A side project developed to help juniors better understand the differences between various CPU Scheduling Algorithms. The site includes FCFS, SJF, RR, and Priority Scheduling algorithms",
      "TechStackImageSources": [
        {
          "ImageSource": "assets/logos/html5.svg",
          "ImageAltText": "HTML5 logo"
        },
        {
          "ImageSource": "assets/logos/css3.svg",
          "ImageAltText": "CSS3 logo"
        },
        {
          "ImageSource": "assets/logos/javascript.svg",
          "ImageAltText": "JavaScript logo"
        }
      ],
      "SkillsLearnt": [
        "HTML5",
        "CSS3",
        "JavaScript",
        "DOM Manipulation"
      ],
      "SourceCodeURL": "https://github.com/karthiksgujjar/CPU-Scheduling-Visualizer",
      "LiveSiteURL": "https://karthiksgujjar.github.io/CPU-Scheduling-Visualizer"
    }
  ];
}
