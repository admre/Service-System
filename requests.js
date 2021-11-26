
const prblm = document.getElementById('prblm');
const submitreq = document.getElementById('submitreq');
subreq.disable = !prblm.value;
prblm.addEventListener('keyup', () =>{
console.log(prblm.value);
});

submitreq = (e) =>{
    console.log("clicked");
    e.preventDefault();
};