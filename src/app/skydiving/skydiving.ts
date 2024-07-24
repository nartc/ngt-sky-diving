import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { NgtsLoader } from 'angular-three-soba/loaders';
import { SceneGraph } from './scene-graph';

@Component({
	selector: 'app-sky-diving',
	template: `
		<ngt-canvas
			[sceneGraph]="sceneGraph"
			[camera]="{ position: [0, 0, 3], fov: 70 }"
			[shadows]="true"
		/>
		<ngts-loader />
	`,
	standalone: true,
	imports: [NgtCanvas, NgtsLoader],
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: `
		:host {
			display: block;
			height: 100dvh;
		}
	`,
})
export class SkyDiving {
	sceneGraph = SceneGraph;
}
