const greetings = "test"

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
