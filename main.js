let str = `
010-1234-5678.
asdfbcd@gmail.com
http://www.omdbapi.com/?i=tt3896198&apikey=9c3524af&s=frozen
The quick brown fox jumps over the lazy dog.
aaaaccvbscdthed
동해물과_백두산이 마르고
`;

const h = ` the hello  world    !

`

const regexp = new RegExp('the', 'gi');
console.log(str.match(regexp));

const regexp2 = /fox/gi;
console.log(regexp2.test(str)); // true

const regexp3 = /jumps/gi;
str = str.replace(regexp3, 'AAA');
console.log(str);

const regexp4 = /\.$/gim
console.log(str.match(regexp4));

console.log(
    str.match(/(?<=@).{1,}/g, '')
);