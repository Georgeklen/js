

//class DomElemnet
function DomElement(selector, height, width, bg, fontSize, text) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
	this.text = text;
}

DomElement.prototype.createdElement = function () {
	let div;

	// проверка
	if (this.selector[0] === '.') {
		div = document.createElement("div");
		div.className = this.selector.slice(1);
	} else {
		div = document.createElement("p");
		div.id = this.selector.slice(1);
	}

	
	div.style.height = this.height + 'px';
	div.style.width = this.width + 'px';
	div.style.background = this.bg;
	div.style.fontSize = this.fontSize + 'px';
	div.textContent = this.text
	document.body.appendChild(div);
};
    //передаем значения 
    let DomElement1 = new DomElement('.block', 200, 300, 'green', 50, 'asdasd');
    let DomElement2 = new DomElement('#best', 500, 500, 'yellow', 100, '46sfd');

    DomElement1.createdElement();
    DomElement2.createdElement();
        