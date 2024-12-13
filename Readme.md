This is a reproduction of a case encountered between Node.js 22.11 and 22.12.
In https://github.com/newrelic/node-newrelic/blob/37407b6d14c2bd6a1c577cce811277753eb8069e/test/integration/config/config-esm.test.js#L16-L19,
we are asserting that a `newrelic.js` file alongside an application's
`index.mjs` file is an _invalid_ configuration. The expectation is that it will
be a `newrelic.cjs` file alongside the application's `index.mjs` file.
In v22.11, this works as expected. But in v22.12, Node attempts to load the
`newrelic.js` file and generate a new error. The code in this repo replicates
the situation.

```shell
node test.js
```