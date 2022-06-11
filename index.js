/*
    web element variables are set below
*/
const setMonster = document.getElementById("monsterButton");
const setSkill = document.getElementById("skillButton");
const specsSection = document.getElementById("specs");

/*
    event listeners are set below
*/

setMonster.addEventListener("click",setMonsterSpecs);
setSkill.addEventListener("click",setSkillSpecs);

/*
    functions are set below
*/

function setMonsterSpecs(){
    specsSection.innerHTML = "setMonsterSpecs works";
}

function setSkillSpecs(){
    specsSection.innerHTML = "setSkillSpecs works";
}