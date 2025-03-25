import { Routes } from '@angular/router';
import { AutocompleteComponent } from './componentes/autocomplete/autocomplete.component';
import { BadgesComponent } from './componentes/badges/badges.component';
import { BreadcrumbComponent } from './componentes/breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './componentes/buttons/buttons.component';
import { ButtonsToggleComponent } from './componentes/buttons-toggle/buttons-toggle.component';
import { CardComponent } from './componentes/card/card.component';
import { CheckboxComponent } from './componentes/checkbox/checkbox.component';
import { ChipsComponent } from './componentes/chips/chips.component';
import { DatepickerComponent } from './componentes/datepicker/datepicker.component';
import { DialogComponent } from './componentes/dialog/dialog.component';
import { DividerComponent } from './componentes/divider/divider.component';
import { ExpansionPanelComponent } from './componentes/expansion-panel/expansion-panel.component';
import { InputComponent } from './componentes/input/input.component';
import { LinksComponent } from './componentes/links/links.component';
import { ListComponent } from './componentes/list/list.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PaginatorComponent } from './componentes/paginator/paginator.component';
import { ProgressBarComponent } from './componentes/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './componentes/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './componentes/radio-button/radio-button.component';
import { SelectComponent } from './componentes/select/select.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { SlideToggleComponent } from './componentes/slide-toggle/slide-toggle.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { SnackbarComponent } from './componentes/snackbar/snackbar.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { TabsComponent } from './componentes/tabs/tabs.component';
import { TooltipComponent } from './componentes/tooltip/tooltip.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeComponentesComponent } from './componentes/home-componentes/home-componentes.component';
import { HomePlantillasComponent } from './plantillas/home-plantillas/home-plantillas.component';
import { PlantillaUnoComponent } from './plantillas/PlantillaModales/PlantillaModales.component';
import { SoloTesteoComponent } from './componentes/solo-testeo/solo-testeo.component';

export const routes: Routes = [
    {
      path: 'sdtgr-lab',
      children: [
        { path: '', component: HomeComponent }, // Ruta raíz de sdtgr-lab
        { path: 'plantillas', component: HomePlantillasComponent, data: { title: 'Plantillas' } },
        { path: 'plantillas/modales', component: PlantillaUnoComponent, data: { title: 'Modales' } },
        { path: 'componentes', component: HomeComponentesComponent, data: { title: 'Componentes' } },
        { path: 'componentes/auto-complete', component: AutocompleteComponent, data: { title: 'Auto Complete' } },
        { path: 'componentes/badges', component: BadgesComponent, data: { title: 'Badges' } },
        { path: 'componentes/breadcrumbs', component: BreadcrumbComponent, data: { title: 'Breadcrumbs' } },
        { path: 'componentes/buttons', component: ButtonsComponent, data: { title: 'Buttons' } },
        { path: 'componentes/buttons-toggle', component: ButtonsToggleComponent, data: { title: 'Buttons Toggle' } },
        { path: 'componentes/card', component: CardComponent, data: { title: 'Card' } },
        { path: 'componentes/checkbox', component: CheckboxComponent, data: { title: 'Checkbox' } },
        { path: 'componentes/chips', component: ChipsComponent, data: { title: 'Chips' } },
        { path: 'componentes/datepicker', component: DatepickerComponent, data: { title: 'Datepicker' } },
        { path: 'componentes/dialog', component: DialogComponent, data: { title: 'Dialog' } },
        { path: 'componentes/divider', component: DividerComponent, data: { title: 'Divider' } },
        { path: 'componentes/expansion-panel', component: ExpansionPanelComponent, data: { title: 'Expansion Panel' } },
        { path: 'componentes/input', component: InputComponent, data: { title: 'Input' } },
        { path: 'componentes/links', component: LinksComponent, data: { title: 'Links' } },
        { path: 'componentes/list', component: ListComponent, data: { title: 'List' } },
        { path: 'componentes/menu', component: MenuComponent, data: { title: 'Menu' } },
        { path: 'componentes/paginator', component: PaginatorComponent, data: { title: 'Paginator' } },
        { path: 'componentes/progress-bar', component: ProgressBarComponent, data: { title: 'Progress Bar' } },
        { path: 'componentes/progress-spinner', component: ProgressSpinnerComponent, data: { title: 'Progress Spinner' } },
        { path: 'componentes/radio-button', component: RadioButtonComponent, data: { title: 'Radio Button' } },
        { path: 'componentes/select', component: SelectComponent, data: { title: 'Select' } },
        { path: 'componentes/sidenav', component: SidenavComponent, data: { title: 'Sidenav' } },
        { path: 'componentes/slide-toggle', component: SlideToggleComponent, data: { title: 'Slide Toggle' } },
        { path: 'componentes/slider', component: SliderComponent, data: { title: 'Slider' } },
        { path: 'componentes/snackbar', component: SnackbarComponent, data: { title: 'Snackbar' } },
        { path: 'componentes/table', component: TablaComponent, data: { title: 'Table' } },
        { path: 'componentes/tabs', component: TabsComponent, data: { title: 'Tabs' } },
        { path: 'componentes/tooltip', component: TooltipComponent, data: { title: 'Tooltip' } },
        { path: 'componentes/solo-testeo', component: SoloTesteoComponent, data: { title: 'Solo Testeo' } }
      ]
    },
    { path: '**', redirectTo: 'sdtgr-lab' } // Redirige cualquier URL desconocida a la raíz de sdtgr-lab
  ];