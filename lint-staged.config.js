module.exports = {
  '*.js': ['prettier --write', 'git add'],
  '*.ts': ['tslint --fix', 'git add'],
  '*.md': ['prettier --write', 'git add'],
}
