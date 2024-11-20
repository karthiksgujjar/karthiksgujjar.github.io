import { animate, style, transition, trigger } from "@angular/animations";

export const routeTransition = trigger('routeTransition', [
    transition('* => *', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
    ]),
]);