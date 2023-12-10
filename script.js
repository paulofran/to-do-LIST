$(document).ready(function(){
    $("#task-form").on("submit", function(e){
        e.preventDefault(); 

        let task = $("#input-tarefa").val().trim();

        if(task){
            let newItem = $("<li>").text(task);
            $("#task-list").append(newItem);
            $("#input-tarefa").val("");
        }
    });
    
    $("#task-list").on("click", "li", function(){
        $(this).css("text-decoration", "line-through");
    });
});