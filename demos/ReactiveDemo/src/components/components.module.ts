import { NgModule } from '@angular/core';
import { MyListComponent } from './my-list/my-list';
import { My2Component } from './my2/my2';
@NgModule({
	declarations: [MyListComponent,
    My2Component],
	imports: [],
	exports: [MyListComponent,
    My2Component]
})
export class ComponentsModule {}
