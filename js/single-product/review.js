function starsReview() {
  const stars = document.querySelector(".stars");
  const starDOM = document.querySelectorAll(".star");

  let id;

  stars.addEventListener("click", (e) => {
    e.preventDefault();
    let netice = "";
    starDOM.forEach((star) => star.classList.remove("active"));
    console.log(e.target);
    e.target.classList.add("active");
    id = e.target.id;

    for (let i = 0; i < id; i++) {
      netice += `<li>
                  <i class="bi bi-star-fill"></i>
                </li>
          `;
    }

    return netice;
  });
}
let reeessult = starsReview();
console.log(starsReview() + "neticee");

const addNewCommentFunc = () => {
  const submitBtn = document.querySelector(".form-submit input");
  let comments = localStorage.getItem("comments")
    ? JSON.parse(localStorage.getItem("comments"))
    : [];

  let commentTextDOM = document.getElementById("comment-text");
  let commentNameDOM = document.getElementById("comment-name");
  let commentListDOM = document.querySelector(".comment-list");
  let commentText = "";
  let commentName = "";

  commentTextDOM.addEventListener("input", function (e) {
    commentText = e.target.value;
  });

  commentNameDOM.addEventListener("input", function (e) {
    commentName = e.target.value;
  });

  function addComment(e) {
    e.preventDefault();
    const date = new Date();
    let commentDate = ` ${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}  `;
    comments.push({
      text: commentText,
      author: commentName,
      date: commentDate,
      rate: starsReview(),
    });
    localStorage.setItem("comments", JSON.stringify(comments));
    console.log(comments.rate);
    let result = "";
    comments.forEach((item) => {
      result += `<li class="comment-item">
                    <div class="comment-avatar">
                      <img src="/img/avatar/avatar1.jpg" alt="" />
                    </div>
                    <div class="comment-text">
                      <ol class="comment-stars">${item.rate}</ol>
                      <div class="comment-meta">
                        <strong>${item.author}</strong>
                        -
                        <time>${item.date}</time>
                      </div>
                      <div class="comment-desc">
                        <p>${item.text}</p>
                      </div>
                    </div>
                  </li>`;
    });
    commentListDOM.innerHTML = result;
    commentTextDOM.value = "";
    commentNameDOM.value = "";
  }

  submitBtn.addEventListener("click", addComment);
};
function comments() {
  starsReview();
  addNewCommentFunc();
}
export default comments();
