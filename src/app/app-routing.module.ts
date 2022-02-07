import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TestComponent } from './test/test.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [   { path: 'list', component: TestComponent },
   { path: 'edit/:id', component: UpdateComponent },
      { path: 'create', component: FormComponent },
         { path: '', redirectTo: '/list', pathMatch: 'full' },
         ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
