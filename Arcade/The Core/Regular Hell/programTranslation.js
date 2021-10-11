function programTranslation(solution, args) {
  var argumentVariants = args.join('|');
  var re = new RegExp(`([^\\w$])(${argumentVariants})\\b`, 'g');
  var sub = `$1$$$2`;

  return solution.replace(re, sub);
}
