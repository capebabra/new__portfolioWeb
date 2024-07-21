import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

// Skills Function
const softSkills = document.getElementById('soft');
const hardSkills = document.getElementById('hard');

const skillImg1 = document.getElementById('skillsImg1');
const skillImg2 = document.getElementById('skillsImg2');
const skillImg3 = document.getElementById('skillsImg3');
const skillImg4 = document.getElementById('skillsImg4');
const skillText1 = document.getElementById('skillsText1');
const skillText2 = document.getElementById('skillsText2');
const skillText3 = document.getElementById('skillsText3');
const skillText4 = document.getElementById('skillsText4');

const skills = document.getElementById('skills');

// Modal Page function
const modalMain = document.getElementById('modalMain');
const modalExit = document.getElementById('modalExit');

const modalPageText = document.getElementById('modalPageText');
const modalPageImg = document.getElementById('modalPageImg');

const list1 = document.getElementById('listSkill1');
const list2 = document.getElementById('listSkill2');
const list3 = document.getElementById('listSkill3');
const list4 = document.getElementById('listSkill4');

const main = document.getElementById('main')

const skillData = {
    soft: {
        skillImg1: {
            text: "Active learning is a unique skill where individuals absorb material more effectively through practice. For quick and long-lasting retention, practical experience is essential, и те, кто обладает этим навыком, быстро осваивают практические задачи. Этот подход обеспечивает более глубокое и продолжительное понимание предмета.",
            img: "img/soft3.png",
        },
        skillImg2: {
            text: "Adaptability is a skill not inherent to everyone. It allows individuals to quickly integrate into various situations and address issues promptly. Additionally, flexibility aids in establishing immediate rapport with new people, making it easy for adaptable individuals to form connections swiftly and effortlessly. This capability is invaluable in navigating diverse environments and challenges with ease.",
            img: "img/soft2.png",
        },
        skillImg3: {
            img: "img/soft1.png",
            text: "Critical thinking is one of the most essential skills for human development. This skill enables individuals to avoid making hasty decisions. Instead of reacting impulsively, critical thinking helps in analyzing situations thoroughly, extracting maximum insight, lessons, and even benefits. It promotes thoughtful consideration and reasoned judgment, leading to more informed and effective outcomes.",
        },
        skillImg4: {
            text: "Communication is the skill of interacting with people, enabling one to establish connections with new colleagues, friends, and others. This ability is crucial for building relationships and fostering collaboration in both personal and professional settings.",
            img: "img/soft4.png",
        },
    },
    hard: {
        skillImg1: {
            text: "Frontend development is one of my core programming skills. It enables the creation of various impressive websites and requires the use of the popular programming language JavaScript, which is highly demanded and fundamental in many IT fields. This skill is essential for crafting engaging and functional user interfaces.",
            img: "img/hard1.png",
        },
        skillImg2: {
            text: "Game development is an exciting skill that involves creating games, adding an interesting dimension to my abilities. While I haven't yet developed any successful games, I have a solid understanding of the development process and continue to refine my skills in this area.",
            img: "img/hard2.png",
        },
        skillImg3: {

            text: "Content designing encompasses my diverse skills in various design fields. Throughout my studies, I have learned to use Photoshop, Canva, Blender, and Figma. I excel in each of these tools in different ways, and overall, I possess a good sense of taste and a keen designer's eye.",
            img: "img/hard3.png",
        },
        skillImg4: {
            text: "Photography is an exceptional skill, enabling one to see and capture beauty. A photographer adeptly selects angles, backgrounds, and lighting to give photos an interesting style. A good photographer can convey atmosphere and emotions through their images, making photography a captivating and valuable ability.",
            img: "img/hard4.png",
        },
    }
};

const skillContent = {
    soft: [
        {
            text: "Active Learning",
            img: "img/softSkill1.png",
        },
        {
            text: "Adaptability",
            img: "img/softSkill2.png",
        },
        {
            text: "Critical Thinking",
            img: "img/softSkill3.png",
        },
        {
            text: "Communication",
            img: "img/softSkill4.png",
        },
    ],
    hard: [
        {
            text: "Front End",
            img: "img/hardSkill1.png",
        },
        {
            text: "Game Development",
            img: "img/hardSkill2.png",
        },
        {
            text: "Designing",
            img: "img/hardSkill3.png",
        },
        {
            text: "Photography",
            img: "img/hardSkill4.png",
        },
    ],
};

function contentActivation(type) {
    setTimeout(function() {
        skillImg1.src = skillContent[type][0].img
        skillImg2.src = skillContent[type][1].img
        skillImg3.src = skillContent[type][2].img
        skillImg4.src = skillContent[type][3].img
        skillText1.textContent = skillContent[type][0].text
        skillText2.textContent = skillContent[type][1].text
        skillText3.textContent = skillContent[type][2].text
        skillText4.textContent = skillContent[type][3].text
    }, 300)
}

function openModal(imgType, type) {
    modalMain.style.display = 'block'
    modalPageImg.src = skillData[type][imgType].img
    modalPageText.textContent = skillData[type][imgType].text
}

function defaultContent() {
    const type = 'soft'
    contentActivation(type)
}
defaultContent();

modalExit.onclick = function() {
    document.body.classList.remove('no-scroll'); // При закрытии
    modalMain.style.display = 'none'
    document.body.style.overflow = 'auto';
}

skills.onclick = function(event) {
    const target = event.target.closest('label')
    if (target) {
        const skillType = target.htmlFor;
        const type = skillType === 'soft' ? 'soft' : 'hard'
        contentActivation(type)
    }

    const ulTarget = event.target.closest('ul')
    if (ulTarget) {
        const skillType = softSkills.checked ? 'soft' : 'hard'
        const imgType = ulTarget.id.replace('listSkill', 'skillImg')
        openModal(imgType, skillType)
        setTimeout(function(){
            smoothsCroll(modalMain)
        }, 200)
    }
}


const hobbiesContent = document.getElementById('hobbies')


const hobbiesContainer = {
    hobbies1:{
        text: 'Football benefits many aspects of life, requiring physical endurance and strength. It emphasizes teamwork, understanding, and cohesion, while also demanding leadership and effective communication to maintain morale and team spirit.',
        img: 'img/hobbies1.png',
    },
    hobbies2:{
        text: 'Snowboarding is a unique and beneficial hobby that offers unforgettable experiences while promoting leg strength and cardiovascular health. It also provides opportunities to meet diverse individuals, fostering potential close friendships.',
        img: 'img/hobbies2.png',
    },
    hobbies3:{
        text: 'Badminton requires exceptional reflexes, endurance, and attention to detail for tracking the shuttlecock. This engaging sport promotes physical fitness and is widely appreciated across various cultures.',
        img: 'img/hobbies3.png',
    },
    hobbies4:{
        text: 'Playing the guitar is a distinctive hobby that demonstrates an individual’s sense of taste and musicality. It not only fosters creativity and self-expression but also provides opportunities for social interaction, including the potential to meet new people and develop meaningful relationships. :)',
        img: 'img/hobbies4.png',
    },
}

function hobbiesModal(imgType) {
    modalMain.style.display = 'block'
    modalPageImg.src = hobbiesContainer[imgType].img
    modalPageText.textContent = hobbiesContainer[imgType].text
}
function smoothsCroll(window) {
    document.body.style.overflow = 'hidden';
    window.scrollIntoView({ behavior: 'smooth'});    
}

hobbiesContent.onclick = function (event) {
    const linkTarget = event.target.closest('a');
    const imgType = linkTarget.id
    hobbiesModal(imgType)
    setTimeout(function(){
        smoothsCroll(modalMain)
    }, 200)
}

const languageSwitcher = document.getElementById('languageSwitcher')
const languageSelected = document.getElementById('languageSelected')
const selectedImg = document.getElementById('selectedImg')
const selectedText = document.getElementById('selectedText')

const languagContainer = {
    english:{
        text: 'EN',
        img: 'img/usa.png',
    },
    russian:{
        text: 'RU',
        img: 'img/russia.png',
    },
    uzbek:{
        text: 'UZ',
        img: 'img/uzbek.png',
    },
}

function languageChange(lang) {
    languageSwitcher.style.display = 'none'
    selectedImg.src = languagContainer[lang].img
    selectedText.textContent = languagContainer[lang].text
}

function defualtLang() {
    const langType = 'english'
    languageChange(langType)
}
defualtLang()

languageSelected.onclick = function() {
    languageSwitcher.style.display = 'block'
    languageSwitcher.addEventListener('click', function(event){
        const target = event.target.closest('ul')
        if (!target) return
        const langType = target.id
        languageChange(langType)
    })
}
