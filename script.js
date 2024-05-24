const font = 'Ivrit';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
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
  love: function(what) {
    this.echo("To my love, " + what + ". Hi my love!, You are as cute as a button!");
  },
  // add more commands here...
};

let term;

function ready() {
  term = $('#terminal').terminal(commands, {
    greetings: false
  });
  term.pause();
  term.echo(() => {
    const ascii = render('Noah Nguyen');
    return `${ascii}\nType 'help' for a list of available commands`;
  }).resume();
}

$(document).ready(function() {
  figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
  figlet.preloadFonts([font], ready);
});

