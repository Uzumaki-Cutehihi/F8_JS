const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];

const r1 = {};
for (let e of watchHistory) {
  if (!r1[e.videoId]) {
    r1[e.videoId] = e.duration;
  } else {
    r1[e.videoId] += e.duration;
  }
}

console.log(r1);

const videoIdList = [];
watchHistory.map((x) => {
  if (!videoIdList.includes(x.videoId)) {
    videoIdList.push(x.videoId);
  }
});
const r2 = {
  videoId: videoIdList[0],
  duration: r1[videoIdList[0]],
};

for (let id in r1) {
  if (r1[id] > r2.duration) {
    r2.videoId = id;
    r2.duration = r1[id];
  }
}
console.log(r2);

//nhóm lịch sử theo user id

const userIdList = [];
watchHistory.map((x) => {
  if (!userIdList.includes(x.userId)) {
    userIdList.push(x.userId);
  }
});

//Khởi tạo danh sách
const r3 = [];
for (let x of userIdList) {
  r3.push({ id: x, videoList: [] });
}
watchHistory.forEach(e => {
    
});
