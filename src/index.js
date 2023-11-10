//criação de variaves
let nome = "Elias";
let xpatual = 6000;
let nivel = "";
let xpAdquirido = 1200;
//Breve história introdutória
console.log("O heroí " + nome + " " + "iniciou uma nova jornada com o seu XP em: " + xpatual);
console.log("");
console.log("No meio do caminho se deparou com um dagrão");
console.log("");
console.log("E com sua bravura e sua potente lamina iniciou a batalha");
console.log("");
//Você quem decide o valor que ele ganhou em xp
console.log("Com muito esforço derrotou o dagrão e com isso ganhou mais" + " "  + xpAdquirido + " " + "em XP!");
console.log("");
//novo xp do heroi
let xp = xpatual + xpAdquirido;

console.log("Agora ele se encontra cansado mais seu XP está totalizado em: " + xp);
console.log("");

if (xp < 1000) {
    nivel = "Ferro";
} else if(xp >= 1001 && xp <= 2000){
    nivel = "Bronze";
}else if(xp >= 2001 && xp <= 5000){
    nivel = "Prata";
}else if(xp >= 6001 && xp <= 7000){
    nivel = "Ouro";
}else if(xp >= 7001 && xp <= 8000){
    nivel = "Platina";
}else if(xp >= 8001 && xp <= 9000){
    nivel = "Ascendente";
}else if(xp >= 9001 && xp <= 1000){
    nivel = "Imortal";
}else if(xp >= 10001){
    nivel = "Radiante";
}else{
    console.log("Nivel invalido");
};
console.log("O Herói de nome" + " " + nome + " " + "Está no nível" + " " + nivel);