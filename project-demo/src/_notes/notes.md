# Design system notes
Creating a new system for creating bespoke presentations for use on metro and NCA sites. 

Existing 'template' approach is too restrictive and frequently results in content being forced into presentations that are not suitable for teh content resulting in poor user experiences. 

Instead we will develop a collection of components (varying on complexity) which an be combined into custom layouts. New components will be continualy developed and al layouts can be stored for future use without minimal housekeeping to clean content out.

## Tech
- Vue.js: The main templating system for creating and assmebling content
- Sass: Creates a styleguide where core styles and values can be easily accessed and maintained
- Webpack: Local server for dev and compiling files into output files for publishing

## Solution levels
Each solution builds on the previous

### Easy
Most closely replicates workflow depricated T3 templates: 

- Content is added into a json file (possible converted from a spreadsheet?)
- Project is built
- Publish through FTP client

No requirement to make any changes to templates, stylesheets, functions etc. 

### Medium
- Components and layouts are built in such a way that styles can be added / modified easily. 
- Minimal styling should be visible in each component to reduce complexity
- Existing components can be assembled into custom layouts
- A library of components and layouts with basic usage will be created

### Hard
- Full dev mode
- New and modifying components, functionality, combinations and layouts for future re-use


## Info gathering
Investigate skill familiarity with and interest in learning with main tech (HMTL, CSS, JS). 

Base assumption is virtually no previous knowledge; basic workflow is to fill content into JS object:

```javascript
export default {
	title: 'Hello world',
	intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	text: [
		'Paragraphs of text in an array',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
	],
	image: {
		src: 'https://source.unsplash/random',
		alt: 'A random image',
	},
}
```

Samples of required structures for different scenarios will be provided
