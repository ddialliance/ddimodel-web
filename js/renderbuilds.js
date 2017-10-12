function renderCards(data) {
    
    var html = '';
    var count = 0;
    $.each(data.builds, function(key, value) {
  
        console.log("Adding Card");

        if(count == 0){
            document.getElementById("latestCommitLink").href=value.APPVEYOR_REPO_COMMIT; 
            count++;
        }

        html += '<li class="collection-item avatar">';
        html += '<a href="' + value.github_commit_info.html_url + '">';
        html += '<img src="' + value.github_commit_info.avatar_url + '" alt="'+value.APPVEYOR_REPO_COMMIT_AUTHOR+'" class="circle"></a>';
        html += '<span class="title"><a href="' + value.APPVEYOR_REPO_COMMIT + '">DDI Docs '+value.APPVEYOR_REPO_COMMIT_TIMESTAMP+'</a></span>';
        html += '<p>'+ value.APPVEYOR_REPO_COMMIT_MESSAGE +'</br>';
        html += value.APPVEYOR_REPO_COMMIT_MESSAGE_EXTENDED;

        html += 'Commit <a href="https://github.com/ddialliance/ddimodel/commit/' + value.APPVEYOR_REPO_COMMIT + '">' + value.APPVEYOR_REPO_COMMIT.substring(0,7) + '...</a></br>';
        html += 'View <a href="' + value.APPVEYOR_REPO_COMMIT + '">Documentation</a></br>';
        html += 'Download <a href="' + value.APPVEYOR_REPO_COMMIT + '/_static/ddi.zip">All Outputs</a>';
        
        html += '</p>';
        html += '<a href="' + value.APPVEYOR_REPO_COMMIT + '/_static/ddi.zip" class="secondary-content"><i class="medium material-icons">file_download</i></a>';
        html += '</li>';

        html += '</div>';
    });
    $('#builds').html(html);
} 





$(document).ready(function() {
    $.getJSON("builds.json", function(data){
        $.each(data, function (index, value) {
            console.log("RENDERING");
            renderCards(data);
        });
    });
    

});

