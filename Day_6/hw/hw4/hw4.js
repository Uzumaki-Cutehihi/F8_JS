const posts = [
  {
    id: 1,

    title: "JavaScript cơ bản",

    tags: ["js", "basic"],

    comments: [
      { user: "An", text: "Hay quá!" },

      { user: "Bình", text: "Rất dễ hiểu" },
    ],
  },

  {
    id: 2,

    title: "Học React không khó",

    tags: ["react", "js"],

    comments: [
      { user: "Chi", text: "Cảm ơn chia sẻ" },
      { user: "An", text: "Hay!" },
    ],
  },
];

//số lượng comment kèm title bài viêt
const handlePost = [];
let flag = -1;
for (let post of posts) {
  flag++;
  handlePost[flag] = {};
  handlePost[flag].title = post.title;
  handlePost[flag].commentCount = post.comments.length;
}
console.log(handlePost);

//mảng mới chứa tất cả các tag nhưng k trùng lặp
const tagList = [];
for (let post of posts) {
  let flagTags = post.tags;
  flagTags.map((tag) => {
    if (!tagList.includes(tag)) {
      tagList.push(tag);
    }
  });
}
console.log(tagList);

//Tìm ra tất cả bình luận của user An
const anComment = [];
for (let post of posts) {
  let cmtFlag = post.comments;
  cmtFlag.map((cmt) => {
    if (cmt.user === "An") {
      anComment.push(cmt.text);
    }
  });
}
console.log(anComment);
