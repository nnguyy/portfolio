const font = 'Slant';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/'});
figlet.preloadFonts([font], ready);

function render(text) {
  const cols = term.cols();
  return trim(figlet.textSync(text, {
    font: font,
    width: cols,
    whitespaceBreak: true
  }));
}

function trim(str) {
  return str.replace(/[\n\s]+$/, '');
}

const commands = {
  help: function() {
    this.echo("\nCOMMANDS:");
    this.echo("   help        Display this help message");
    this.echo("   all         Runs every command");
    this.echo("   about       Short description");
    this.echo("   contact     Find more information"); 


  },
  love: function() {
    this.echo("You are as cute as a button!");
  },
  // add more 
};

let term;

function ready() {
  term = $('#terminal').terminal(commands, {
    greetings:false,
    height: '100%',
    width: '100%',
  });
  term.pause();
  term.echo(() => {
    const ascii = render('Noah Nguyen');
    return "Noah Nguyen\nType 'help' for a list of available commands";
  }).resume();
}

$(document).ready(function() {

});

