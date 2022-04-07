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
function createpost(post) {
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            // const error = true;

            if(!error){
                resolve();
            }else {
                reject("Error: Something Went Wrong");
            }
        },3000);
    });
        
}
// createpost({title: "post Three", body: "This is post Three"})
//     .then(getposts);
//     .catch(err => console.log(err));