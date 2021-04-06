//Async
const getDataGithub = async () => {
    const url = "https://api.github.com/users/sitiasyaroh";
    const option = {
    method: "GET",
    };
    try {
        let response = await fetch(url, option);
        response = await response.json();
        console.log(response);
        let displayUsername = `<h1>${response.login}</h1>`;
        const container1 = document.querySelector(".container1");
        let displayAvatar = `<h1>${response.avatar_url}</h1>`;
        const container2 = document.querySelector(".container2");
        let displayBlog= `<h1>${response.blog_url}</h1>`;
        const container3 = document.querySelector(".container3");
        let displayFollower= `<h1>${response.followers_url}</h1>`;
        const container4 = document.querySelector(".container4");
        let displayFollowing= `<h1>${response.following_url}</h1>`;
        const container5 = document.querySelector(".container5");
        container1.innerHTML = displayUsername;
        container2.innerHTML = displayAvatar;
        container3.innerHTML = displayBlog;
        container4.innerHTML = displayFollower;
        container5.innerHTML = displayFollowing;
    } catch (error) {
        console.log(error);
    }    
};

getDataGithub();  