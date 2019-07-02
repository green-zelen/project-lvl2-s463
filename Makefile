install:
	npm link

build:
	npm run build

lint:
	npx eslint .

lint_fix:
	npx eslint . --fix

publish:
	npm publish --dry-run
