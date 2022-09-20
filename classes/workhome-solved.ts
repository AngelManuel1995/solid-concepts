type HtmlType = 'input'|'select'|'textarea'|'radio';

class HtmlElement {
    constructor(
        public id: string,
        public type: HtmlType,
    ) {}
}

class InputAttributes /*extends HtmlElement¨*/ {
    constructor(
        public value: string,
        public placeholder: string,
    ) {
    }
}

class InputEvents {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;

    constructor( value: string, placeholder: string, id: string ) {
        this.htmlElement = new HtmlElement(id, 'input');
        this.inputAttributes = new InputAttributes(value, placeholder);
    }

    setFocus() {};
    getValue() {};
    isActive() {};
    removeValue() {};
}


const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');