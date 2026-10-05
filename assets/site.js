document.addEventListener('DOMContentLoaded',()=>{
 const search=document.getElementById('game-search');
 const grid=document.getElementById('game-grid');
 const empty=document.getElementById('no-results');
 let filter='all';
 function update(){if(!grid)return;const q=(search?.value||'').trim().toLowerCase();let shown=0;grid.querySelectorAll('.game-card').forEach(card=>{const matchName=(card.dataset.name||'').includes(q);const matchCategory=filter==='all'||card.dataset.category===filter;const visible=matchName&&matchCategory;card.classList.toggle('hidden',!visible);if(visible)shown++});if(empty)empty.classList.toggle('visible',shown===0)}
 search?.addEventListener('input',update);
 document.querySelectorAll('.filter-chip').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter-chip').forEach(b=>b.classList.remove('active'));button.classList.add('active');filter=button.dataset.filter||'all';update()}));
 const iframe=document.getElementById('game-frame');const player=document.getElementById('player');iframe?.addEventListener('load',()=>player?.classList.add('loaded'));
 document.getElementById('fullscreen')?.addEventListener('click',()=>{if(!iframe)return;const target=iframe.requestFullscreen?iframe:iframe.parentElement;if(document.fullscreenElement)document.exitFullscreen?.();else target?.requestFullscreen?.()});
});