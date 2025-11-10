const { shortenAddress, shortenAddressAuto } = require('./dist/index');

const address = 'lnbc2500n1p0k8z7xpp5v4xyzacds5s5s5sd13s68dsd3s2d8sd3grgrg6fdhfdfddff26d';

console.log(shortenAddress(address, 10, 2, 3));
console.log(shortenAddressAuto(address, 12));
