module.exports = {
  '*.js': ['eslint --fix', 'git add'],
  '*.ts': ['eslint --fix', 'git add'],
  '*.md': ['prettier --write', 'git add'],
}
