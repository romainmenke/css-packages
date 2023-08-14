import module from 'module';
import fs from 'fs';
import assert from 'assert';

const require = module.createRequire(import.meta.url);

const expectedContents = `.box {
	background-color: green;
}
`;

function test(cssFilename) {
	const cssContents = fs.readFileSync(cssFilename, 'utf8');

	assert.strictEqual(cssContents, expectedContents);
}

test(require.resolve('@rmenke/css-package-style/some-styles.css'));
test(require.resolve('@rmenke/css-package-main/some-styles.css'));
test(require.resolve('@rmenke/css-package-main'));
test(require.resolve('@rmenke/css-package-conditional-1'));
assert.throws(() => require.resolve('@rmenke/css-package-conditional-2/style'));
test(require.resolve('@rmenke/css-package-conditional-3/styles'));
