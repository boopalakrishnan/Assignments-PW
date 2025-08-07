let conditionalPromise = new Promise((resolve, reject) => {
const data = Math.random(); 
console.log(data);
if(data>0.5) {
resolve("Resolved successfully!");
} else {
reject("Rejected!");
}
});

conditionalPromise.then(message => {
console.log(message); 
})
.catch(error => {
console.log(error);
});