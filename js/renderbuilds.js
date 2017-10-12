function renderCards(data) {
    
    var html = '';
    $.each(data.builds, function(key, value) {
  
        console.log("Adding Card");
        html += '<li class="collection-item avatar">';
        html += '<img src="https://github.com/' + value.APPVEYOR_REPO_COMMIT_AUTHOR + '.png" alt="" class="circle">';
        html += '<span class="title">Title</span>';
        html += '<p>First Line <br>';
        html += '   Second Line';
        html += '</p>';
        html += '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>';
        html += '</li>';

        html += '</div>';
    });
    $('#builds').html(html);
} 





$(document).ready(function() {
    $.getJSON("/builds.json", function(data){
        $.each(data, function (index, value) {
            console.log("RENDERING");
            renderCards(data);
        });
    });
    

});

