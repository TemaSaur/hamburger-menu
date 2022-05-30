# Hamburger-menu

Simple script for adding a hamburger menu to your web page

## Usage

1. Include `<script src="PATH_TO/navbar.js"></script>`.
1. Add `data-burger` attribute to your navbar. (example in `index.html`)
1. Wrap your links in a `div` with  `data-burger-list` attribute. (example in `index.html`)
1. If needed, change settings in the `navbar.js` (media query breakpoint, header height, etc.)

Example:
```
<nav data-burger>
	<div data-burger-list>
		<a>home</a>
		<a>about</a>
		<a>contact</a>
	</div>
</nav>
```
