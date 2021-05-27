const LI = 'li';
const UL = 'ul';
const ACTIVE = 'active';
const ACTIVE_SESSION_NAME = '---';
const ACTIVE_BUTTON = 'btn-active';
const buttons = document.querySelectorAll('button');
let parent = null; let tagname=null;
buttons.forEach((btn, index) => {
    btn.addEventListener('click', e => {
        let nextEl = btn.nextElementSibling;
        sessionStorage.setItem(ACTIVE_SESSION_NAME, index);
        nextEl.classList.toggle(ACTIVE);
        btn.classList.add(ACTIVE_BUTTON);
    });
});

function getTagLower(x){
    return x.tagName.toLocaleLowerCase();
}
function getParent(parent){
    return parent.parentElement
}

function addActiveClass(x){
    x.classList.add(ACTIVE)
}

document.addEventListener('DOMContentLoaded', e => {
    const index = sessionStorage.getItem(ACTIVE_SESSION_NAME);
    if (index) {
        const button = buttons[+index];
        if (button) {
            button.classList.add(ACTIVE_BUTTON);
            parent = button.parentElement;
            tagname = getTagLower(parent);
            if (tagname === LI) {
                parent = getParent(parent);
                tagname = getTagLower(parent);
                if (tagname === UL) {
                    let cc = getTogether(parent);
                    console.log(cc);
                    addActiveClass(parent);
                    parent = getParent(parent);
                    tagname = getTagLower(parent);
                    if (parent && tagname === LI) {
                        parent = getParent(parent);
                        tagname = getTagLower(parent);
                        if (tagname === UL) {
                            addActiveClass(parent);
                            parent = getParent(parent);
                            tagname = getTagLower(parent);
                            if (parent && tagname === LI) {
                                parent = getParent(parent);
                                tagname = getTagLower(parent);
                                if (tagname === UL) {
                                    addActiveClass(parent);
                                }
                            }
                        }
                    }
                }
            }
            let nextEl = button.nextElementSibling;
            addActiveClass(nextEl);
        }
    }
});