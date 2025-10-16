const matches = [
  { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
  { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
  { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
  { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
  { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
];

const teamList = {};
const flagTeamList = [];

matches.forEach((match) => {
  if (!teamList[match.teamA]) {
    teamList[match.teamA] = { win: 0, lose: 0, draw: 0 };
    flagTeamList.push(match.teamA);
  }
  if (!teamList[match.teamB]) {
    teamList[match.teamB] = { win: 0, lose: 0, draw: 0 };
    flagTeamList.push(match.teamB);
  }

  if (match.scoreA > match.scoreB) {
    teamList[match.teamA].win++;
    teamList[match.teamB].lose++;
  } else if (match.scoreA < match.scoreB) {
    teamList[match.teamB].win++;
    teamList[match.teamA].lose++;
  } else {
    teamList[match.teamA].draw++;
    teamList[match.teamB].draw++;
  }
});

console.log(teamList);

const totalPoint = {};
for (let team of flagTeamList) {
  totalPoint[team] = teamList[team].win * 3 + teamList[team].draw;
}

console.log(totalPoint);

const resultPointList = Object.entries(totalPoint)
  .map(([team, point]) => ({ team, point }))
  .sort((a, b) => b.point - a.point); // Bản chất đây là 1 callback function (nhanh gọn)

console.log(resultPointList);

//đội bóng điểm cao nhất là ở index 0

const highestScoreTeam = resultPointList[0];
console.log(highestScoreTeam);
