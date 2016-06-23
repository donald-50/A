import B from 'B';
import C from 'C';

const packageId = 'A 1.0.0';
export default packageId;

console.log(`${packageId}: Loaded.`);
console.log(`${packageId}: Dependency B = ${B}`);
console.log(`${packageId}: Dependency C = ${C}`);
