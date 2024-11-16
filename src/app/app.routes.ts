import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
        pathMatch: 'full',
    },
    {
        path: "intro",
        loadComponent: () => import('./components/intro/intro.component').then(m => m.IntroComponent),
    },
    {
        path: "skills",
        loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent),
    },
    {
        path: "projects",
        loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent),
    },
];
