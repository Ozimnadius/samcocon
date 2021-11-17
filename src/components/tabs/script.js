//components/tabs
class Tabs{
    constructor(hash) {
        this.hash = hash;
        this.tabs = document.querySelector(".jsTabs");
        this.btnsList = this.tabs.querySelectorAll('.jsTabs__btn');
        this.tabsList = this.tabs.querySelectorAll('.jsTabs__tab');
        this.activeIndex = 0;
        this.init();
    }

    init(){
        this.activeIndex = this.getIndex(this.tabs.querySelector('[href="'+this.hash+'"]'));
        this.activate();
        this.btnsList.forEach(i=>i.addEventListener('click',this.click));
    }

    getIndex(elem){
        return Array.from(this.btnsList).indexOf(elem)
    }

    click=(e)=>{
        e.preventDefault();
        this.deactivate();
        this.activeIndex = this.getIndex(e.currentTarget);
        this.activate();
    }

    deactivate(){
        this.btnsList[this.activeIndex].classList.remove('active');
        this.tabsList[this.activeIndex].classList.remove('active');
    }

    activate(){
        this.btnsList[this.activeIndex].classList.add('active');
        this.tabsList[this.activeIndex].classList.add('active');
    }
}