import { Component } from '@angular/core';
import { SkyDiving } from './skydiving/skydiving';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [SkyDiving],
	template: `
		<app-sky-diving />
	`,
})
export class AppComponent {}
