document.querySelector(".title").addEventListener("click", rollDice);

const num_list = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
};
function setClassNum(player_name, num) {
  player_name.className = player_name.className.replace(
    player_name.getAttribute("class").slice(31),
    num_list[num]
  );
}
function setDice(player_num) {
  let random_num = Math.floor(Math.random() * 6) + 1;
  if (player_num === 1) {
    let dice01 = document.querySelector(".dice01");
    setClassNum(dice01, random_num);
  } else {
    let dice02 = document.querySelector(".dice02");
    setClassNum(dice02, random_num);
  }
  return random_num;
}
function setWinner(player01, player02) {
  if (player01 === player02) {
    document.querySelector(".player-one h2").innerHTML = "Draw :o";
    document.querySelector(".player-two h2").innerHTML = "Draw! :o";
    // console.log("player01: " + player01 + " player02: " + player02);
  } else if (player01 > player02) {
    document.querySelector(".player-one h2").innerHTML = "Win :)";
    document.querySelector(".player-two h2").innerHTML = "Lost :(";
    // console.log("player01: " + player01 + " player02: " + player02);
  } else {
    document.querySelector(".player-two h2").innerHTML = "Win! :)";
    document.querySelector(".player-one h2").innerHTML = "Lost :(";
    // console.log("player01: " + player01 + " player02: " + player02);
  }
}
function rollDice() {
  let player_one = setDice(1);
  let player_two = setDice(2);
  setWinner(player_one, player_two);
}
