class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.repos = document.getElementById('repos');
  }
  showProfile(user) {
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
  clearProfile() {
    console.log(this.profile);
    this.profile.innerHTML = '';
  }

  showRepos(repos) {
    let output = ''
    repos.forEach(function (repos) {
      output += `
      <div class="card card-body">        
      <div class="row">
        <div class="col-md-6">
          <a href="${repos.html_url}" target="_blank">${repos.name}></a>
        </div>

        <div class="col-md-6">
          <span class="badge badge-primary">Stars :${repos.stars_count} </span>
          <span class="badge badge-secondary">Watchers :${repos.watchers_count} </span>
          <span class="badge badge-success">Forks undefined :${repos.forks_count} </span>
        </div>
      </div>
    </div>
    <br>`
    document.getElementById('repos').innerHTML = output
  ;
    })

  }
}