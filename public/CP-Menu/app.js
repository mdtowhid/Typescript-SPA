const LI = 'li';
const UL = 'ul';
const ACTIVE_CLASS = 'active';
const STORAGE_NAME = '---';
const ACTIVE_BUTTON = 'btn-active';
const buttons = document.querySelectorAll('button');
const STORAGE_OBJECT_CONFIGS = {
    index: 0,
    rootId: '',
    storageMode: 0,
    visitedLinks: [],
    storageName: 'activated-menu',
};
let parent = null;
let tagname = null;

STORAGE_OBJECT_CONFIGS.storageMode = 1;
STORAGE_OBJECT_CONFIGS.rootId = 'slideMenu';


buttons.forEach((btn, index) => {
    btn.addEventListener('click', e => {
        const _ = STORAGE_OBJECT_CONFIGS;
        _.index = index;
        _.visitedLinks.push({ index });
        localStorage.setItem(_.storageName, JSON.stringify(_));
        const __ = JSON.parse(localStorage.getItem(_.storageName));
        console.log(__);


        localStorage.setItem(STORAGE_NAME, index);
        let nextEl = btn.nextElementSibling;
        nextEl.classList.toggle(ACTIVE_CLASS);
        btn.classList.add(ACTIVE_BUTTON);
    });
});

function getTagLower(x) {
    return x.tagName.toLocaleLowerCase();
}
function getParent(parent) {
    return parent.parentElement
}

function addActiveClass(x) {
    x.classList.add(ACTIVE_CLASS)
}

document.addEventListener('DOMContentLoaded', e => {
    const index = localStorage.getItem(STORAGE_NAME);
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