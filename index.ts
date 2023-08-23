import { of } from 'rxjs';
import { take } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/take
// Example 1: Take 1 value from source
//emit 1,2,3,4,5
const list$ = of(12, 21, 32, 41, 25);
//take the first emitted value then complete
const example = list$.pipe(take(1));
const subscribe = example.subscribe((val) => console.log(val));
//output: 1
