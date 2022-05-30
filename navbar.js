const options = {
	breakPoint: '860px', // media query
	headerHeight: '100px',
	menuWidth: '100vw',
	menuBg: '#333',
	textColor: '#fff',
	fontSize: '1.5rem',
	itemBorder: '1px solid #ccc',
	hoverStateBg: '#00000030',
	burgerColor: '#fff'
}

window.addEventListener('load', e => {
	// add hamburger icon to the navbar
	const navbar = document.querySelector('[data-burger]')
	const hamburger = createHamburger(navbar)
	stylish()
	const list = document.querySelector('[data-burger-list')

	hamburger.onclick = () => toggleActive(hamburger, list)
	for (let i = 0; i < list.children.length; ++i) {
		list.children[i].onclick = () => toggleActive(hamburger, list)
	}
})

const createHamburger = navbar => {
	// create hamburger with ts-burger class
	const hamburger = document.createElement('div')
	hamburger.classList.add('ts-burger')

	// create line in the burger
	const line = document.createElement('div')
	hamburger.appendChild(line)

	// add hamburger to the nav element
	navbar.appendChild(hamburger)

	// return the burger for later use
	return hamburger
}

const stylish = () => {
	const style = document.createElement('style')
	style.innerHTML = `@media (max-width: ${options.breakPoint}) {
		.ts-burger {
		  cursor: pointer;
		  width: 48px;
		  padding: 4px 8px;
		}
		.ts-burger::after,
		.ts-burger::before,
		.ts-burger div {
		  background-color: ${options.burgerColor};
		  border-radius: 3px;
		  content: '';
		  display: block;
		  height: 3px;
		  margin: 12px 0;
		  -webkit-transition: all .2s ease-in-out;
		  transition: all .2s ease-in-out;
		}
		.ts-burger.active::before {
		  -webkit-transform: translateY(10px) rotate(135deg);
				  transform: translateY(10px) rotate(135deg);
		  margin: 7px 0;
		}
		.ts-burger.active::after {
		  -webkit-transform: translateY(-10px) rotate(-135deg);
				  transform: translateY(-10px) rotate(-135deg);
		  margin: 7px 0;
		}
		.ts-burger.active div {
		  -webkit-transform: scale(0);
				  transform: scale(0);
		  margin: 7px 0;
		}
		[data-burger-list] {
		  height: calc(100vh - ${options.headerHeight});
		  width: ${options.menuWidth};
		  position: fixed;
		  left: 0;
		  top: ${options.headerHeight};
		  display: -webkit-box;
		  display: -ms-flexbox;
		  display: flex;
		  -webkit-box-orient: vertical;
		  -webkit-box-direction: normal;
			  -ms-flex-direction: column;
				  flex-direction: column;
		  background: ${options.menuBg};
		  -webkit-transform: translateX(100%);
				  transform: translateX(100%);
		  -webkit-transition: all .4s;
		  transition: all .4s;
		  gap: 0 !important;
		}
		[data-burger-list].active {
		  -webkit-transform: translateX(0);
				  transform: translateX(0);
		}
		[data-burger-list] a {
		  -webkit-box-flex: 1;
			  -ms-flex: 1;
				  flex: 1;
		  color: ${options.textColor};
		  font-size: ${options.fontSize};
		  display: -webkit-box;
		  display: -ms-flexbox;
		  display: flex;
		  -webkit-box-pack: center;
			  -ms-flex-pack: center;
				  justify-content: center;
		  -webkit-box-align: center;
			  -ms-flex-align: center;
				  align-items: center;
		  border-bottom: ${options.itemBorder};
		}
		[data-burger-list] a:hover, [data-burger-list] a:active, [data-burger-list] a:focus {
		  background: ${options.hoverStateBg};
		}
	  }`
	document.documentElement.appendChild(style)
}

const toggleActive = (burger, list) => {
	burger.classList.toggle('active')
	list.classList.toggle('active')
}
