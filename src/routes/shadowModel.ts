type Options = {
	el?: HTMLTemplateElement;
};

export class PopupShadow extends HTMLElement {
	constructor(options: Options) {
		super();

		const shadow = this.attachShadow({ mode: 'open' });
		const wrapper = this.setup();
		const style = this.setupStyle();

		const template = document.getElementById('message') as HTMLTemplateElement;
		const templateContent = template?.content;

		shadow.appendChild(templateContent.cloneNode(true));
		shadow.appendChild(wrapper);
		shadow.appendChild(style);
	}

	setup() {
		const wrapper = document.createElement('div');
		wrapper.classList.add('wrapper');

		const icon = document.createElement('span');
		icon.classList.add('icon');
		icon.setAttribute('tabindex', '0');

		const info = document.createElement('span');
		info.classList.add('info');

		const text = this.getAttribute('data-text');
		info.textContent = text;

		const img = document.createElement('img');
		img.src = this.getAttribute('img') ?? 'favicon.png';
		img.alt = this.getAttribute('img') ?? '';

		icon.appendChild(img);

		wrapper.appendChild(icon);
		wrapper.appendChild(info);

		return wrapper;
	}

	setupStyle() {
		// Create some CSS to apply to the shadow DOM
		let style = document.createElement('style');

		style.textContent = `
        .wrapper {
          position: relative;
        }

        .info {
          font-size: 0.8rem;
          width: 200px;
          display: inline-block;
          border: 1px solid black;
          padding: 10px;
          background: white;
          border-radius: 10px;
          opacity: 0;
          transition: 0.6s all;
          position: absolute;
          bottom: 20px;
          left: 10px;
          z-index: 3;
        }

        img {
          width: 30rem;
        }

        .icon:hover + .info, .icon:focus + .info {
          opacity: 1;
        }`;

		return style;
	}
}
