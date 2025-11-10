# shortden

A small TypeScript utility to shorten long strings or addresses by keeping the start and end and hiding the middle. Perfect for displaying crypto addresses, payment IDs, or any long strings in a readable way.

---

## Installation

Using npm:

```bash
npm install shortden
```

Using yarn:

```bash
yarn add shortden
```

---

## Usage

### Import the function

```ts
import { shortenAddress } from 'shortden';
```

### Shorten an address with custom start/end lengths

```ts
const address = 'lnbc2500n1p0k8z7xpp5v4xyz...26d';
const short = shortenAddress(address, 10, 2, 3, '*');
console.log(short); // Output: ln****26d
```

---

## API

### `shortenAddress(fullAddress, reduction, startLength, endLength, hiddenChar)`

* `fullAddress` (string) – The string to shorten.
* `reduction` (number) – Total length of the shortened string.
* `startLength` (number) – Number of characters to keep at the start.
* `endLength` (number) – Number of characters to keep at the end.
* `hiddenChar` (string, default `'*'`) – Character used to hide the middle part.

Returns a shortened string.

---

## License

MIT

