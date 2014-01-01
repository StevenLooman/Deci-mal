REPORTER = dot
COVERAGE_REPORTER = html-cov

test: test-unit

test-unit: node_modules
	@./node_modules/.bin/mocha test --reporter $(REPORTER)

test-unit-cov: node_modules lib-cov
	@JS_COV=1 ./node_modules/.bin/mocha test --reporter $(COVERAGE_REPORTER) > coverage_unit.html
	@open coverage_unit.html

lib-cov:
	@node_modules/jscover/bin/jscover lib lib-cov

sonar: lib-cov
	@echo TODO
