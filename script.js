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
    this.echo("   about       My short description");
    this.echo("   contact     More information on me"); 
  },
  all: function() {
    this.exec('help');
    this.exec('about');
    this.exec('contact');
  },
  about: function() {
    this.echo("This is a short description about me.");
  },
  contact: function() {
    this.echo(" Email     nnoahnguyenn@gmail.com");
    this.echo(" Github    github.com/nnguyy");
  },
  love: function() {
    this.echo("You are as cute as a button!");
  },
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

