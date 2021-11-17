//components/template
class Template {
    constructor() {
        this.content = document.querySelector('#templates').content;
    }

    html(name) {
        return this.content.querySelector(`#${name}`).innerHTML;
    }

    close() {
        $.fancybox.close();
    }

    open(name,opt={}) {
        $.fancybox.open(this.html(name),opt);
        $('.input[type="tel"]').inputmask("+7(999)999-99-99");
    }

    get current() {
        return $.fancybox.getInstance().current.$content;
    }
}

const template = new Template();