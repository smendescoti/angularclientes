import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'

@NgModule({
    imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ]
})
export class AdminMaterialModule { }