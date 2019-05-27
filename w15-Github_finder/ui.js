class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body">
        <div class="row">
        
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
            <a href="${user.html_url}" class="btn btn-primary btn-block">View Profile</a>
          </div>

          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
            <span class="badge badge-success">Followers:${user.followers}</span>
            <span class="badge badge-info">Public Following:${user.following}</span>

            <ul class="list-group">
                <li class="list-group-item"> Company :${user.company} </li>
                <li class="list-group-item"> Website/Blog :${user.blog} </li>
                <li class="list-group-item"> Location :${user.location} </li>
                <li class="list-group-item"> Member Since :${user.created_at} </li>
            </ul>

          </div>

        </div>
      </div>
    `;
    }

    showRepos(repos){

    }

    clearProfile(){
        console.log(this.profile);
        this.profile.innerHTML = '';
    }
}