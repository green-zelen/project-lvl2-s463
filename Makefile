install:
	npm link

build:
	npm run build

lint:
	npx eslint .

lint_fix:
	npx eslint . --fix

test: 
	npm run test

publish:
	npm publish --dry-run
