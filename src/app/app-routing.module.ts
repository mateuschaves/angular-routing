import { EmployeelistComponent } from './employeelist/employeelist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees', component: EmployeelistComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [DepartmentListComponent, EmployeelistComponent];