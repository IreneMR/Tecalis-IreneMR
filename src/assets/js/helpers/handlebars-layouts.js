const Handlebars = require('handlebars');
const layouts = require('handlebars-layouts');
const fs = require('fs');

// Register helpers
layouts.register(Handlebars);

// Register partials
Handlebars.registerPartial(
  'base',
  fs.readFileSync('src/templates/layouts/base.hbs', 'utf8')
);
Handlebars.registerPartial(
  'header',
  fs.readFileSync('src/templates/partials/header.hbs', 'utf8')
);
Handlebars.registerPartial(
  'footer',
  fs.readFileSync('src/templates/partials/footer.hbs', 'utf8')
);

module.exports = Handlebars;
