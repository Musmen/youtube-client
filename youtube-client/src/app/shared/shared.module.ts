import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

const materialModules = [
  MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatExpansionModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ...materialModules,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...materialModules,
  ],
})
export class SharedModule { }
