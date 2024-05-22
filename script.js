const greetings = "Noah Nguyen\nType 'help' to see list of commands." 

$(function() {
    $('#terminal').terminal({
        love: function(what) {
            this.echo("To my love, " + what + ". Hi my love!, You are as cute as a button!");
        },
        // Define more commands here...
    }, {
        greetings
    });
});
