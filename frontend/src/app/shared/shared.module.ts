import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        FooterComponent,
        SidebarComponent,
        NavbarComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule
    ],
    exports: [
        FooterComponent,
        SidebarComponent,
        NavbarComponent
    ]
})
export class SharedModule { }