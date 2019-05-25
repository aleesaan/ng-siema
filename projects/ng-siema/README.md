# Angular carousel
A super lightweight carousel component that acts as a wrapper for [Siema](https://pawelgrzybek.github.io/siema/). I created it for personal use but thought to share it.

[See the demo here](https://aleesaan.github.io/ng-siema/).

### Installation

First install the library.
```
npm install @aleesaan/ng-siema
```
Then import the **NgSiemaModule** in your module.
```ts
import { NgSiemaModule } from  'ng-siema';

@NgModule({
	...
	imports: [
		NgSiemaModule,
	],
	...
})
export class AppModule {}
```  

### Usage:

The **NgSiemaModule** comes just with a `siema` component. Inside, put the images you want as slides.
```html
<siema>
	<img  src="assets/siema-pink.svg">
	<img  src="assets/siema-yellow.svg">
	...
</siema>
```

#### Inputs:

- [`options`](#Options);
- `enableArrows` (default `false`): if `true` the arrow keys can be used to change slides;
- `enableClickOutside` (default `false`): if `true`, the component will emit a `close()` event when clicking outside the carousel;
- `enableEscape` (default `false`): if `true`, the component will emit a `close()` event when pressing escape.
```html
<siema
	[enableArrows]="true"
	[enableEscape]="true"
	(close)="closeCarousel()">
	<img  src="assets/siema-pink.svg">
	<img  src="assets/siema-yellow.svg">
	...
</siema>
```

#### Options

```ts
interface  NgSiemaOptions {
	duration: number;
	easing: string;
	perPage: number;
	startIndex: number;
	draggable: boolean;
	multipleDrag: boolean;
	threshold: number;
	loop: boolean;
}
```

### Styling

The slides will be placed inside the following html structure, which you can use to style the carousel as you wish.
```html
<siema>
	<div class="siema-container">
		<div class="siema">
			<img src="assets/siema-pink.svg">
			<img src="assets/siema-yellow.svg">
			...
		</div>
	</div>
</siema>
```
