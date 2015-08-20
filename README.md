# patterns-code
LESS and JS for Pattern Library

### Usage:

1. Include the patterns-cocde repo in the root of your aplicaiton
2. Use include statements to import styles/healthicity.less in your less file, then link your application file to your less file
	2A. add application overrides to app specific color scheme and link to fonts

		@color-primary: 				@color-corporate-primary;
		@color-light: 					@color-corporate-light;
		@color-dark: 					@color-corporate-dark;
		@color-lighter: 				@color-corporate-lighter;
		@color-darker: 					@color-corporate-darker;
		@color-accent: 					@color-corporate-accent;
		@color-accent-secondary: 		@color-corporate-accent-secondary;
		@font-path: 					'patterns-code/fonts'; 


3. Use Codekit or other to combine /styles/healthicity.min.js into your .js file, then link to your .js file
4. Link to gloabal images in patterns-library folder.




## Scripts
Codekit is used to compile the JS to healthicity.min.js


## styles


## fonts


## images