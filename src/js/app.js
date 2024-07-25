import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

let translationData = {}
let langType = 'en' // Установите начальный язык

// Функция для загрузки JSON файла и обновления контента
function loadTranslations() {
    fetch('json/translate.json')
        .then(response => response.json())
        .then(translation => {
            // Функция выбора языка
            function chooselang(lang) {
                translationData = translation[lang]
                mainContent()
                bothContent()
                defaultContent()
                hobbiesContent()
                staticSkillsContent()
            }
            
            // Выбор языка после загрузки данных
            chooselang(langType);
        })
}

// Запускаем загрузку переводов после загрузки DOM
document.addEventListener('DOMContentLoaded', loadTranslations)

function layouts(layout, layoutEl) {
    const navEl = document.querySelectorAll(layoutEl)
    const translation = translationData[layout]

    translation.forEach((element, index) => {
        if (navEl[index]) {
            navEl[index].textContent = element.title;
        }
    });
}

// Обновление контента при смене языка
function updateContent() {
    mainContent()
    bothContent()
    defaultContent()
    hobbiesContent()
    staticSkillsContent()
}

function mainContent() {
    document.querySelector('.textContent-subheading').textContent = translationData["main"].mainSub;
    document.querySelector('.textContent-heading').textContent = translationData["main"].mainHead;
    document.querySelector('.textContent-paragraph').textContent = translationData["main"].mainPar;
    document.querySelector('.textContent-link').textContent = translationData["main"].mainLk;
    document.querySelector('.textContent-info').textContent = translationData["main"].mainInf;
    document.querySelector('.textContent-paragraphInfo .paragraphBold').textContent = translationData["main"].mainParInf1;
    document.querySelector('.textContent-paragraphInfo span').textContent = translationData["main"].mainParInf2;
}

function staticSkillsContent() {
    document.querySelector('.containerHeading').textContent = translationData["skills"]["contHead"]
    document.querySelector('.headingSkillsSoft').textContent = translationData["skills"]["headSk1"]
    document.querySelector('.headingSkillsHard').textContent = translationData["skills"]["headSk2"]
}

function hobbiesContent() {
    document.querySelector('.headingHobbies').textContent = translationData["hobbyStatic"].hobby

    const translateHobbies = translationData["hobbies"]
    const hobbiesTitle = document.querySelectorAll('.contentHobbies-textHeading')
    const hobbiesDesc = document.querySelectorAll('.contentHobbies-textParagraph')
    const hobbiesLink = document.querySelectorAll('.contentHobbies-link')
    const hobbiesImg = document.querySelectorAll('.contentHobbies-img')

    translateHobbies.forEach((element, index) => {
        if (hobbiesTitle[index]) {
            hobbiesTitle[index].textContent = element.title
        }
        if (hobbiesDesc[index]) {
            hobbiesDesc[index].textContent = element.description
        }
        if (hobbiesLink[index]) {
            hobbiesLink[index].textContent = element.link
        }
        if (hobbiesImg[index]) {
            hobbiesImg[index].setAttribute('src', element.img)
        }
    });
}

function bothContent() {
    const header = 'header'
    const footer = 'footer'
    
    const navF = '.navigation-elementF'
    const navH = '.navigation-elementH'
    layouts(footer, navF)
    layouts(header, navH)
}

modalExit.onclick = function() {
    modalMain.style.display = 'none'
    document.body.style.overflow = 'auto'
};
const modalMain = document.getElementById('modalMain')

function openModal(layoutType) {
    console.log('Opening modal with:', layoutType)
    modalMain.style.display = 'block'
    const modalPage = document.querySelector('.modalPage__text')
    const modalImg = document.querySelector('.modalPage-imgContent')
    
    modalPage.textContent = layoutType["text"]
    modalImg.src = layoutType["img"]
}

const skills = document.querySelector('.skills')

skills.onclick = function(event) {
    const target = event.target.closest('label')
    if (target) {
        const skillType = target.htmlFor
        const type = skillType === 'soft' ? 'soft' : 'hard'
        contentActivation(type)
    }
    const ulTarget = event.target.closest('ul')
    if (ulTarget) {
        const skillsUl = document.querySelectorAll('.contentSkillsImg')
        let skillChecker = softSkills.checked ? 'soft' : 'hard'
        const translateSkillsLang = translationData["skillData"][skillChecker]

        translateSkillsLang.forEach((element, index) => {
            if (skillsUl[index]) {
                skillsUl[index].onclick = () => {
                    const ulContent = element
                    openModal(ulContent)
                    setTimeout(function(){
                        smoothsCroll(modalMain)
                    }, 200)
                }
            }
        })
    }
}

function contentActivation(type) {
    const skillsContentTranslation = translationData["skillContent"][type]
    const skillText = document.querySelectorAll(".skillsText")
    const skillImg = document.querySelectorAll(".skillsImg")

    skillsContentTranslation.forEach((element, index) => {
        if (skillText[index]) {
            skillText[index].textContent = element.text
        }

        if (skillImg[index]) {
            skillImg[index].setAttribute('src', element.img)
        }
    });
}

function defaultContent() {
    const softType = 'soft'
    contentActivation(softType)
}

function smoothsCroll(window) {
    window.scrollIntoView({ behavior: 'smooth' });  
    setTimeout(() => {
        document.body.style.overflow = 'hidden';
    }, 200)
}

const hobbies = document.getElementById('hobbies')

hobbies.onclick = (event) => {
    const target = event.target.closest('a');
    if (target) {
        const hobbyTranslate = translationData["hobbiesContainer"]

        const hobbyLink = document.querySelectorAll('.contentHobbies-link')

        hobbyTranslate.forEach((element, index) => {
            if (hobbyLink[index]) {
                hobbyLink[index].onclick = () => {
                    const linkType = element;
                    openModal(linkType);
                    setTimeout(function(){
                        smoothsCroll(modalMain)
                    }, 200)
                }
            }
        })
    }
}

const languageSwitcher = document.getElementById('languageSwitcher')
const languageSelected = document.getElementById('languageSelected')
const selectedImg = document.getElementById('selectedImg')
const selectedText = document.getElementById('selectedText')

const languagContainer = {
    en: {
        text: 'EN',
        img: 'img/usa.png',
    },
    ru: {
        text: 'RU',
        img: 'img/russia.png',
    }
};

function languageChange(lang) {
    langType = lang
    languageSwitcher.style.display = 'none'
    selectedImg.src = languagContainer[lang].img
    selectedText.textContent = languagContainer[lang].text

    // Загрузите и примените переводы для выбранного языка
    loadTranslations()
}

function defualtLang() {
    const defaultLang = 'en'
    languageChange(defaultLang)
}
defualtLang()

languageSelected.onclick = function() {
    languageSwitcher.style.display = 'block'
    languageSwitcher.addEventListener('click', function(event) {
        const target = event.target.closest('ul')
        if (!target) return
        const langType = target.id
        languageChange(langType)
    });
};
