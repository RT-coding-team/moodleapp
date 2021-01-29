// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreSharedModule } from '@/core/shared.module';
import { AddonCalendarComponentsModule } from '../../components/components.module';

import { AddonCalendarEventPage } from './event.page';

const routes: Routes = [
    {
        path: '',
        component: AddonCalendarEventPage,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        IonicModule,
        FormsModule,
        TranslateModule.forChild(),
        CoreSharedModule,
        AddonCalendarComponentsModule,
    ],
    declarations: [
        AddonCalendarEventPage,
    ],
    exports: [RouterModule],
})
export class AddonCalendarEventPageModule {}