function getJsHand() {
  var js_hand_num = Math.floor(Math.random() * 3);
  var hand;
  if (js_hand_num == 0) {
    hand = "グー";
  } else if (js_hand_num == 1) {
    hand = "チョキ";
  } else {
    hand = "パー";
  }
  return hand;
}

function winLose(user, js) {
  var winLose;
  if (user == "グー") {
    if (js == "グー") {
      winLose = "あいこ";
    } else if (js == "チョキ") {
      winLose = "勝ち";
    } else {
      winLose = "負け";
    }
  } else if (user == "チョキ") {
    if (js == "グー") {
      winLose = "負け";
    } else if (js == "チョキ") {
      winLose = "あいこ";
    } else {
      winLose = "勝ち";
    }
  } else {
    if (js == "グー") {
      winLose = "勝ち";
    } else if (js == "チョキ") {
      winLose = "負け";
    } else {
      winLose = "あいこ";
    }
  }
  return winLose;
}

var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください");
while (
  user_hand != "グー" &&
  user_hand != "チョキ" &&
  user_hand != "パー" &&
  user_hand != null
) {
  alert("グー・チョキ・パーのいずれかを入力してください");
  user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください");
}
if (user_hand == null) {
  alert("またチャレンジしてね");
} else {
  var js_hand = getJsHand();
  var judge = winLose(user_hand, js_hand);
  alert(judge);
}
