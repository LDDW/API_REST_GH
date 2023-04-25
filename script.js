// import octokit
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
// import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: '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'
});

try {
    const repos = await octokit.request("GET /users/{username}/repos", {
         username: "LDDW",
    })

    // show list of repos in html
    const reposList = document.getElementById("repos-list");
    reposList.innerHTML = repos.data.map(repo => {
        return `<li><a href="${repo.html_url}">${repo.name}</a></li>`
    }).join("");


} catch (error) {
    console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}