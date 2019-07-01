install:
	npm install

lint:
	npx eslint .

lint_fix:
	npx eslint . --fix

start:
	npx babel-node src/bin/index.js

publish:
	npm publish --dry-run
