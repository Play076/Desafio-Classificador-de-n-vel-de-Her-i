//"O Herói de nome **{nome}** está no nível de **{nivel}**"

let nickname;
let EXP;
let levelMessage;
const levels = [
  "Ferro",
  "Bronze",
  "Prata",
  "Ouro",
  "Platina",
  "Ascendente",
  "Imortal",
  "Radiante",
];
const heroDescription = "O Herói de nome ";
const levelDescription = " está no nível de ";

nickname = "Lord Dark Souls";
EXP = 3257;

for (let i = 0; i < EXP; i++) {
  if (i < 1000) {
    levelMessage = heroDescription + nickname + levelDescription + levels[0];
  } else if (i < 2000) {
    levelMessage = heroDescription + nickname + levelDescription + levels[1];
  } else if (i < 5000) {
    levelMessage = heroDescription + nickname + levelDescription + levels[2];
  } else if (i < 7000) {
    levelMessage = heroDescription + nickname + levelDescription + levels[3];
  } else if (i < 8000) {
    levelMessage = heroDescription + nickname + levelDescription + levels[4];
  } else if (i < 9000) {
    levelMessage = heroDescription + nickname + levelDescription + levels[5];
  } else if (i < 10000) {
    levelMessage = heroDescription + nickname + levelDescription + levels[6];
  } else {
    levelMessage = heroDescription + nickname + levelDescription + levels[7];
  }
}

console.log(levelMessage);