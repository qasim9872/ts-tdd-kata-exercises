# TypeScript Test Driven Development (Kata) Exercises

![Tests](https://github.com/qasim9872/ts-tdd-kata-exercises/workflows/CI/badge.svg)

The repo provides a playground for doing daily kata exercises. It's configured with all the tools you will need to work through the exercises as seamless as possible.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`.
ESLint is set up to enforce best practices.

> Make sure to install the vscode recommendations as they will make your life a lot simpler.
> You can find them in .vscode/extensions.json

### How to start your Kata exercises

> Jest tests are set up to run with `npm test` or `yarn test`.

## Continuous Integration

### GitHub Actions

One action is added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix

## Inspiration

- [Learn TDD - Peter Provost](http://www.peterprovost.org/blog/2012/05/02/kata-the-only-way-to-learn-tdd/)
- [Clean Code TDD - Uncle Bob](https://www.youtube.com/watch?v=58jGpV2Cg50)
