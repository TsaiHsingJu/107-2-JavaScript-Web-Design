class Github{
    constructor(){
        this.client_id = '0f17a98b97f2d7d63dc6';
        this.client_secret = '6e55c71a8275fd206fd0dad41b86633ba91a8f9b';
        
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);
        console.log(profileResponse);
        const profile = await profileResponse.json();
        console.log(profile);
    }

}




/*

https://api.github.com/users/tsaihsingju?client_id=%220f17a98b97f2d7d63dc6%22&client_secret=%226e55c71a8275fd206fd0dad41b86633ba91a8f9b%22


{
  "login": "TsaiHsingJu",
  "id": 43174127,
  "node_id": "MDQ6VXNlcjQzMTc0MTI3",
  "avatar_url": "https://avatars0.githubusercontent.com/u/43174127?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/TsaiHsingJu",
  "html_url": "https://github.com/TsaiHsingJu",
  "followers_url": "https://api.github.com/users/TsaiHsingJu/followers",
  "following_url": "https://api.github.com/users/TsaiHsingJu/following{/other_user}",
  "gists_url": "https://api.github.com/users/TsaiHsingJu/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/TsaiHsingJu/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/TsaiHsingJu/subscriptions",
  "organizations_url": "https://api.github.com/users/TsaiHsingJu/orgs",
  "repos_url": "https://api.github.com/users/TsaiHsingJu/repos",
  "events_url": "https://api.github.com/users/TsaiHsingJu/events{/privacy}",
  "received_events_url": "https://api.github.com/users/TsaiHsingJu/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2018-09-11T12:27:20Z",
  "updated_at": "2019-04-30T10:07:34Z"
}

*/