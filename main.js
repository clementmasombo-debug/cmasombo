document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const fb=document.querySelectorAll('.filters button'),items=document.querySelectorAll('[data-cat]');
fb.forEach(b=>b.addEventListener('click',()=>{fb.forEach(x=>x.setAttribute('aria-pressed',x===b));
items.forEach(i=>i.hidden=!(b.dataset.f==='all'||i.dataset.cat.split(' ').includes(b.dataset.f)))}));
const f=document.getElementById('contact-form');
if(f)f.addEventListener('submit',async e=>{e.preventDefault();const s=document.getElementById('status');s.textContent='Sending…';
try{const r=await fetch('https://api.web3forms.com/submit',{method:'POST',body:new FormData(f)});const d=await r.json();
if(d.success){s.textContent='Message sent. I’ll reply soon.';f.reset()}else throw 0}
catch{s.textContent='Message not sent. Please email clementmasombo@gmail.com directly.'}});
