// import octokit
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

const octokit = new Octokit({
    auth: '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'
});

try {
    const result = await octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: "lddw",
        repo: "mongrandfrere",
    });
  
    // show list of commit messages to html
    const commitList = document.getElementById("commit-list");
    for (let i = 0; i < result.data.length; i++) {
        const commit = document.createElement("p");
        commit.innerText = result.data[i].commit.message;
        commitList.appendChild(commit);
    }

    // show lenght of commit list to html
    const commitListLength = document.getElementById("commit-list-length");
    commitListLength.innerText = result.data.length;
  
} catch (error) {
    console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}