(function(){
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,box;
  function $(id){return document.getElementById(id)}
  function openBox(src,title){
    if(!box){
      box=document.createElement('dialog');
      box.innerHTML='<img alt=""><p></p><button type="button">Close</button>';
      box.querySelector('button').onclick=function(){box.close()};
      box.addEventListener('click',function(e){if(e.target===box)box.close()});
      document.body.appendChild(box);
    }
    var im=box.querySelector('img');im.src=src;im.alt=title;
    box.querySelector('p').textContent=title;box.showModal();
  }
  function img(src,alt,ph,done){
    var im=new Image();im.alt=alt;im.loading='lazy';
    im.onerror=function(){ph.textContent='Image not found: '+src};
    if(done)im.onload=done;
    im.src=src;return im;
  }
  /* certificates grid with names */
  function card(c,i){
    var b=document.createElement('button');b.type='button';b.className='cert rv tilt';b.style.setProperty('--d',(i%4*.08)+'s');
    b.innerHTML='<div class="shot"></div><div class="b"><h3></h3><span></span></div>';
    b.querySelector('h3').textContent=c.title;
    b.querySelector('span').textContent=c.issuer+(c.date?', '+c.date:'');
    var shot=b.querySelector('.shot');shot.textContent='';
    if(c.image)shot.appendChild(img(c.image,c.title+' certificate',shot));else shot.textContent='Add image';
    if(c.link){
      var a=document.createElement('a');a.className='lk';a.href=c.link;a.target='_blank';a.rel='noopener';a.textContent='Verify on LinkedIn';
      a.addEventListener('click',function(e){e.stopPropagation()});
      b.querySelector('.b').appendChild(document.createElement('br'));b.querySelector('.b').appendChild(a);
    }
    b.addEventListener('click',function(){if(c.image)openBox(c.image,c.title)});
    return b;
  }
  var all=$('all-certs'),tabs=$('tabs');
  if(all&&tabs){
    var cats=['All'];CERTIFICATES.forEach(function(c){if(cats.indexOf(c.category)<0)cats.push(c.category)});
    var show=function(cat){
      all.textContent='';
      CERTIFICATES.filter(function(c){return cat==='All'||c.category===cat}).forEach(function(c,i){var e=card(c,i);all.appendChild(e);setTimeout(function(){e.classList.add('in')},30)});
      Array.prototype.forEach.call(tabs.children,function(t){t.setAttribute('aria-pressed',t.dataset.cat===cat)});
    };
    cats.forEach(function(cat){
      var t=document.createElement('button');t.type='button';t.dataset.cat=cat;
      var n=cat==='All'?CERTIFICATES.length:CERTIFICATES.filter(function(c){return c.category===cat}).length;
      t.textContent=cat+' ('+n+')';t.onclick=function(){show(cat)};tabs.appendChild(t);
    });
    show('All');
  }
  /* projects with screenshot rows */
  var pl=$('projects-list');
  if(pl)PROJECTS.forEach(function(p,i){
    var a=document.createElement('article');a.className='proj rv tilt';
    a.innerHTML='<div class="pb"><h3></h3><p></p><ul class="chips"></ul><div class="links"></div></div>';
    a.querySelector('h3').textContent=p.title;a.querySelector('p').textContent=p.desc;
    p.tags.forEach(function(t){var li=document.createElement('li');li.textContent=t;a.querySelector('.chips').appendChild(li)});
    var L=a.querySelector('.links');
    [['play','Google Play'],['live','Live demo'],['code','Code']].forEach(function(k){
      if(p[k[0]]){var l=document.createElement('a');l.href=p[k[0]];l.target='_blank';l.rel='noopener';l.textContent=k[1];L.appendChild(l)}
    });
    if(!L.children.length)L.remove();
    if(p.images&&p.images.length){
      var row=document.createElement('div');row.className='shots';
      p.images.forEach(function(src,n){
        var b=document.createElement('button');b.type='button';b.setAttribute('aria-label',p.title+' screenshot '+(n+1));
        b.appendChild(img(src,p.title+' screenshot '+(n+1),b));
        b.addEventListener('click',function(){openBox(src,p.title)});row.appendChild(b);
      });
      a.appendChild(row);
    }else{var d=document.createElement('div');d.className='noshots';d.textContent='Screenshots coming soon';a.appendChild(d)}
    pl.appendChild(a);
  });
  /* gallery */
  var g=$('gallery');
  if(g)ACHIEVEMENTS.filter(function(a){return a.image&&!(g.classList.contains('mini')&&/poster/i.test(a.title))}).forEach(function(a,i){
    var b=document.createElement('button');b.type='button';b.className='gi rv zoom tilt';b.style.setProperty('--d',(i%4*.08)+'s');
    function asText(){b.className='gi txt rv zoom tilt in';b.innerHTML='<b></b><span></span>';b.querySelector('b').textContent=a.year;b.querySelector('span').textContent=a.title}
    if(a.image){
      var im=img(a.image,a.title,b);im.onerror=asText;b.appendChild(im);
      var cap=document.createElement('div');cap.className='cap';cap.innerHTML='<b></b><span></span>';
      cap.querySelector('b').textContent=a.year;cap.querySelector('span').textContent=a.title;b.appendChild(cap);
      b.addEventListener('click',function(){openBox(a.image,a.year+': '+a.title)});
    }else asText();
    g.appendChild(b);
  });
  /* home page: early innovations grid */
  var iv=$('inventions');
  if(iv&&typeof INVENTIONS!=='undefined')INVENTIONS.forEach(function(x,i){
    var b=document.createElement('button');b.type='button';b.className='it rv zoom';b.style.setProperty('--d',(i*.07)+'s');
    b.setAttribute('aria-label','Enlarge '+x.title);
    b.appendChild(img(x.image,x.title,b));
    var cap=document.createElement('span');cap.className='cap';cap.textContent=x.title;b.appendChild(cap);
    b.addEventListener('click',function(){openBox(x.image,x.title)});
    iv.appendChild(b);
  });
  /* home page: posters inside the software cards */
  document.querySelectorAll('[data-full]').forEach(function(b){b.addEventListener('click',function(){openBox(b.dataset.full,b.dataset.title)})});
  /* home page: sidebar achievements */
  var sa=$('side-ach');
  if(sa)ACHIEVEMENTS.filter(function(a){return a.side!==false&&!/poster/i.test(a.title)}).forEach(function(a){
    var li=document.createElement('li');li.innerHTML='<b></b><span></span>';
    li.querySelector('b').textContent=a.year;li.querySelector('span').textContent=a.title;sa.appendChild(li);
  });
  /* home page counts */
  var n={projects:typeof PROJECTS!=='undefined'&&PROJECTS.length+' projects',certs:CERTIFICATES.length+' certificates',gallery:ACHIEVEMENTS.filter(function(a){return a.image}).length+' photos'};
  document.querySelectorAll('[data-n]').forEach(function(e){e.textContent=n[e.dataset.n]});
  document.querySelectorAll('[data-from="certs"]').forEach(function(e){e.dataset.count=CERTIFICATES.length});
  /* theme */
  var tb=$('theme'),root=document.documentElement;
  if(tb)tb.addEventListener('click',function(){
    var v=root.getAttribute('data-theme')==='light'?'dark':'light';root.setAttribute('data-theme',v);
    try{localStorage.setItem('theme',v)}catch(e){}
  });
  /* scroll reveal (lid-open flip), count-up, timeline draw */
  function count(el){
    var to=+el.dataset.count,suf=el.dataset.suffix||'',t0=null;
    if(reduce){el.textContent=to+suf;return}
    (function step(t){t0=t0||t;var p=Math.min((t-t0)/1400,1),e=1-Math.pow(1-p,3);
      el.textContent=Math.round(to*e)+suf;if(p<1)requestAnimationFrame(step)})(performance.now());
  }
  /* robotics-style heading decode */
  var glyphs='01<>/#$%&';
  function decode(el){
    var t=el.dataset.t||el.textContent;el.dataset.t=t;var s=performance.now();
    (function f(now){
      var p=Math.min((now-s)/800,1);
      el.textContent=t.split('').map(function(c,i){return c===' '||i<p*t.length?c:glyphs[Math.floor(Math.random()*glyphs.length)]}).join('');
      if(p<1)requestAnimationFrame(f);else el.textContent=t;
    })(s);
  }
  /* reveal on scroll. Uses layout position (offsetTop), which the 3D flip
     transform does not change, so tall panels still reveal on page load. */
  function docTop(el){var y=0;while(el){y+=el.offsetTop;el=el.offsetParent}return y}
  var pending=[].slice.call(document.querySelectorAll('.rv,.tl')).filter(function(el){return !el.classList.contains('in')});
  function reveal(){
    var line=scrollY+innerHeight*.92;
    pending=pending.filter(function(el){
      if(docTop(el)>line)return true;
      el.classList.add('in');
      el.querySelectorAll('[data-count]').forEach(count);
      el.querySelectorAll('.tl').forEach(function(x){x.classList.add('in')});
      if(!reduce&&el.matches('main>.panel')){var h=el.querySelector('h2');if(h)setTimeout(function(){decode(h)},450)}
      return false;
    });
    if(!pending.length)removeEventListener('scroll',reveal);
  }
  addEventListener('scroll',reveal,{passive:true});addEventListener('resize',reveal);
  requestAnimationFrame(function(){requestAnimationFrame(reveal)});
  /* progress bar + scrollspy */
  var bar=$('bar'),links=[].slice.call(document.querySelectorAll('.toc a'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
  function onScroll(){
    var h=document.documentElement;bar.style.transform='scaleX('+(h.scrollTop/(h.scrollHeight-h.clientHeight||1))+')';
    var cur=0;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<innerHeight*.4)cur=i});
    links.forEach(function(a,i){a.classList.toggle('on',i===cur)});
  }
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  /* 3D tilt */
  if(!reduce)document.addEventListener('mousemove',function(e){
    var c=e.target.closest&&e.target.closest('.tilt');
    document.querySelectorAll('.tilt').forEach(function(p){if(p!==c&&p.style.transform)p.style.transform=''});
    if(!c||!c.classList.contains('in'))return;
    var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    c.style.transform='perspective(900px) rotateY('+x*7+'deg) rotateX('+(-y*7)+'deg) translateY(-4px)';
  });
})();
