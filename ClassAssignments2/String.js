
let s1= 'Hello World'
let str=s1.split(' ');
s1=str.at(str.length-1);
console.log(`The last word is  ${s1} with length `+s1.length);

let s2="   fly me   to   the moon  " 
s2=s2.trim();
let str2=s2.split(' ');
s2=str2.at(str2.length-1)
console.log(`The last word is  ${s2} with length `+s2.length);

function isAnagram(str1, str2) 
{
let value = str1.split('');
let value2 = str2.split('');
value=value.sort();
value2=value2.sort();
 for (let i = 0; i < value.length; i++) {
        if (value[i] !== value2[i]||value.length!=value2.length) 
            return false;
    }
    return true;
}
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));
