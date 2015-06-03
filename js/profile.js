var profileManager = {
  getGitHubInfo : function(){
    var githubUsername = 'andrewpe';

    $.ajax({
      type: 'GET',
      url: '//api.github.com/users/andrewpe',
      dataType: 'json',
      success: function(data, textStatus, jqXHR) {
          console.log(data);

          //Setting Profile Card Info
          $("#profilePhoto").attr('src',data.avatar_url);
          $("#fullName").text(data.name);
      },
      error: function(jqXHR, textStatus, errorThrown) {
      },
    });
  }
};