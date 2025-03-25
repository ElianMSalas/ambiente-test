import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-components-navigator',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatSidenavModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [BreakpointObserver],
  templateUrl: './components-navigator.component.html',
  styleUrls: ['./components-navigator.component.scss']
})
export class ComponentsNavigatorComponent implements OnInit {
  isSmallScreen: boolean = false;
  @ViewChild(MatSidenav, { static: true })
  sidenav!: MatSidenav;

  componentsMenu = [
    { route: 'sdtgr-lab/componentes/auto-complete', label: 'Auto Complete' },
    { route: 'sdtgr-lab/componentes/badges', label: 'Badges' },
    { route: 'sdtgr-lab/componentes/breadcrumbs', label: 'Breadcrumbs' },
    { route: 'sdtgr-lab/componentes/buttons', label: 'Buttons' },
    { route: 'sdtgr-lab/componentes/buttons-toggle', label: 'Buttons Toggle' },
    { route: 'sdtgr-lab/componentes/card', label: 'Card' },
    { route: 'sdtgr-lab/componentes/checkbox', label: 'Checkbox' },
    { route: 'sdtgr-lab/componentes/chips', label: 'Chips' },
    { route: 'sdtgr-lab/componentes/datepicker', label: 'Datepicker' },
    { route: 'sdtgr-lab/componentes/dialog', label: 'Dialog' },
    { route: 'sdtgr-lab/componentes/divider', label: 'Divider' },
    { route: 'sdtgr-lab/componentes/expansion-panel', label: 'Expansion Panel' },
    { route: 'sdtgr-lab/componentes/input', label: 'Input' },
    { route: 'sdtgr-lab/componentes/links', label: 'Links' },
    { route: 'sdtgr-lab/componentes/list', label: 'List' },
    { route: 'sdtgr-lab/componentes/menu', label: 'Menu' },
    { route: 'sdtgr-lab/componentes/paginator', label: 'Paginator' },
    { route: 'sdtgr-lab/componentes/progress-bar', label: 'Progress Bar' },
    { route: 'sdtgr-lab/componentes/progress-spinner', label: 'Progress Spinner' },
    { route: 'sdtgr-lab/componentes/radio-button', label: 'Radio Button' },
    { route: 'sdtgr-lab/componentes/select', label: 'Select' },
    { route: 'sdtgr-lab/componentes/sidenav', label: 'Sidenav' },
    { route: 'sdtgr-lab/componentes/slide-toggle', label: 'Slide Toggle' },
    { route: 'sdtgr-lab/componentes/slider', label: 'Slider' },
    { route: 'sdtgr-lab/componentes/snackbar', label: 'Snackbar' },
    { route: 'sdtgr-lab/componentes/table', label: 'Table' },
    { route: 'sdtgr-lab/componentes/tabs', label: 'Tabs' },
    { route: 'sdtgr-lab/componentes/tooltip', label: 'Tooltip' },
    { route: 'sdtgr-lab/componentes/solo-testeo', label: 'Solo Testeo' }
  ];

  templatesMenu = [
    { route: 'sdtgr-lab/plantillas/modales', label: 'Modales' }
  ];

  principalMenu = [
    { route: 'sdtgr-lab', label: 'Inicio' },
  ]

  isComponentsSection = false;
  isTemplatesSection = false;
  isPrincipalSection = false;

  closeSidenavOnItemClick(event: MouseEvent): void {
    event.stopPropagation();
    
    if(this.sidenav.mode === 'over'){
      this.sidenav.close();
    }
  }

  constructor(
    private observer: BreakpointObserver, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.observer.observe(['(max-width:800px)']).subscribe(({ matches }) => {
      this.sidenav.mode = matches ? 'over' : 'side';
      this.isSmallScreen = matches;
  
      if (matches) {
        this.sidenav.opened = false;
      } else {
        this.sidenav.opened = true;
      }
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data) 
    ).subscribe(data => {
      const newTitle = data['title'] || 'Sistema de Diseño - TGR';
      this.titleService.setTitle(newTitle);
    });
  
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isComponentsSection = event.urlAfterRedirects.startsWith('/sdtgr-lab/componentes');
        this.isTemplatesSection = event.urlAfterRedirects.startsWith('/sdtgr-lab/plantillas');
        this.isPrincipalSection = event.urlAfterRedirects.startsWith('');
      }
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  navigateToAndCloseSidenav(event: MouseEvent, route: string): void {
    event.stopPropagation(); // Evita el cierre del panel
    this.router.navigate([route]); // Navega a la ruta seleccionada
  }
}
