/**
 * 1. Update Redux -> Node.js, React Testing Library -> MongoDB ✅
 * 2. Add new skill -> Typescript, after javascript, 2 years ✅
 * 3. Remove "Download CV" element ✅
 * 4. Personal image: width -> 36rem ✅
 * 5. ✨Bonus✨ Highlight skills items: li -> click -> .underline ✅
 */

// Update Redux -> Node.js, React Testing Library -> MongoDB
const updateText = (dataName, h2Class, h2Text) => {
    const element = document.querySelector(`[data-name=${dataName}`);
    element.setAttribute('data-name', `${h2Text}`);
    element.querySelector(`.${h2Class}`).innerText = `${h2Text}`;
}

updateText("Redux", "skills__title", "NodeJS");
updateText("'React testing library'", "skills__title", "MongoDB");



// Add new skill -> Typescript, after javascript
// const li = document.createElement("li");
// li.setAttribute('data-name', 'typescript');
// li.classList.add('skills__column');

// const h2 = document.createElement("h2");
// h2.classList.add("skills__title");
// h2.insertAdjacentText("afterbegin", "Typescript");

// const span = document.createElement("span");
// span.classList.add("skills__years");
// span.innerText = "2 years";

// li.appendChild(h2);
// li.appendChild(span);

// const jsSkill = document.querySelector("[data-name=Javascript]");
// jsSkill.insertAdjacentElement("afterend", li);

const js = document.querySelector("[data-name=Javascript]");
const tsString = `<li data-name="Typescript" class="skills__column">
<h2 class="skills__title">Typescript</h2>
<span class="skills__years">2 year</span>
</li>`;

js.insertAdjacentHTML("afterend", tsString);



// Remove "Download CV" element
const downloadButton = document.querySelector(".find-out-link");
downloadButton.remove();



// Personal image: width -> 36rem
const personalPic = document.querySelector(".bio__pic");
personalPic.style = "width: 36rem";



// Highlight skills items: li -> click -> .underline
const skillsList = document.querySelectorAll(".skills__column");

[...skillsList].map((item) => {
    item.addEventListener("click", () => {
        const activeElement = document.querySelector(".underline");

        if (activeElement) {
            activeElement.classList.remove("underline");
        }

        item.classList.add("underline");
    })
})