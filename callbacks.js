const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post two", body: "This is post two"}
];

function getposts() {
    setTimeout(()=> {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createpost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    },3000);
}

// getposts();

createpost({title: "Post Three", body: "This is Post Three"},getposts);