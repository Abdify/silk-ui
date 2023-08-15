/* eslint-env node */
module.exports = {
  '*.js': ['eslint --fix', 'prettier --write', 'git add'],
  '*.jsx': ['eslint --fix', 'prettier --write', 'git add'],
  '*.ts': ['eslint --fix', 'prettier --write', 'git add'],
  '*.tsx': ['eslint --fix', 'prettier --write', 'git add'],
  '*.css': ['prettier --write', 'git add'],
};
