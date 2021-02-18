import Singlenton from './Singleton'

const a = Singlenton.getIntance()
const b = Singlenton.getIntance()

console.log(`a es igua a b?`, a === b);
