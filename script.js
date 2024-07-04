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
    this.echo("");
    this.echo("COMMANDS:");
    this.echo("   help        Display this help message");
    this.echo("   clear       Clear the terminal screen");
    this.echo("   all         Runs every command");
    this.echo("   about       My short description");
    this.echo("   contact     More information on me");
    this.echo("");
  },
  clear: function() {
    this.clear();
    this.echo("Noah Nguyen\nType 'help' for a list of available commands");
  },
  all: function() {
    this.exec('about');
    this.exec('contact');
  },
  about: function() {
    this.echo("");
    this.echo(" Name        Noah Nguyen");
    this.echo(" Age         ${age}");
    this.echo(" Location    Columbus, Ohio");
    this.echo("");
  },
  contact: function() {
    this.echo("");
    this.echo(" Email     nnoahnguyenn@gmail.com");
    this.echo(" Github    https://github.com/nnguyy");
    this.echo("");
  },
  love: function() {
    this.echo("You are as cute as a button!");
  },
  love2: function() {
    this.echo("I LOVE YOU SO MUCH I MISS YOU! come save me wah wah");
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

