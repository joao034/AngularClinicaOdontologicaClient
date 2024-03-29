import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageReportsComponent } from "./pages/page-reports/page-reports.component";

const routes: Routes = [
    {path: '', component: PageReportsComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class DashboardRoutingModule {}