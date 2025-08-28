<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="utf-8" />

<meta name="viewport" content="width=device-width, initial-scale=1" />

<title>Uma Musume — Stat Priority Helper</title>

<style>

&nbsp; :root { --bg:#0b0c10; --card:#16181d; --text:#eaf0f7; --muted:#9fb0c6; --accent:#5dd39e; --chip:#263041; }

&nbsp; body{margin:0;font:16px/1.4 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; background:var(--bg); color:var(--text);}

&nbsp; .wrap{max-width:900px;margin:40px auto;padding:24px;}

&nbsp; h1{font-size:1.6rem;margin:.2rem 0 1rem;}

&nbsp; .card{background:var(--card); border-radius:14px; padding:18px 16px; box-shadow:0 6px 30px rgba(0,0,0,.25);}

&nbsp; .row{display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:.5rem 0 1rem;}

&nbsp; label{display:block; font-weight:600; margin-bottom:.25rem; color:var(--muted);}

&nbsp; select{width:100%; padding:.65rem .75rem; border-radius:10px; border:1px solid #2b3445; background:#0f1217; color:var(--text); outline:none;}

&nbsp; .result{margin-top:.25rem;}

&nbsp; .order{display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.5rem;}

&nbsp; .chip{background:var(--chip); border:1px solid #324057; padding:.5rem .65rem; border-radius:999px; display:flex; align-items:center; gap:.5rem;}

&nbsp; .rank{background:var(--accent); color:#0b291e; font-weight:800; font-size:.85rem; border-radius:999px; padding:.15rem .5rem;}

&nbsp; .hint{color:var(--muted); margin-top:.75rem; font-size:.95rem}

&nbsp; .footer{color:#7d8aa3; font-size:.85rem; margin-top:1rem}

&nbsp; .small{font-size:.85rem}

&nbsp; @media (max-width:680px){ .row{grid-template-columns:1fr;} }

</style>

</head>

<body>

&nbsp; <div class="wrap">

&nbsp;   <h1>🏇 Uma Musume — Stat Priority Helper</h1>

&nbsp;   <div class="card">

&nbsp;     <div class="row">

&nbsp;       <div>

&nbsp;         <label for="distance">Race Distance</label>

&nbsp;         <select id="distance">

&nbsp;           <option value="short">Short (≤ 1400m)</option>

&nbsp;           <option value="mile">Mile (1400–1800m)</option>

&nbsp;           <option value="middle">Middle (1800–2400m)</option>

&nbsp;           <option value="long">Long (2400m+)</option>

&nbsp;         </select>

&nbsp;       </div>

&nbsp;       <div>

&nbsp;         <label for="style">Running Style</label>

&nbsp;         <select id="style">

&nbsp;           <option value="nige">Nige (Front-runner)</option>

&nbsp;           <option value="senko">Senko (Leader)</option>

&nbsp;           <option value="sashi">Sashi (Chaser)</option>

&nbsp;           <option value="oikomi">Oikomi (Closer)</option>

&nbsp;         </select>

&nbsp;       </div>

&nbsp;     </div>



&nbsp;     <div class="result">

&nbsp;       <div class="small">Priority order (1 = train first):</div>

&nbsp;       <div id="order" class="order" aria-live="polite"></div>

&nbsp;       <div id="notes" class="hint"></div>

&nbsp;     </div>



&nbsp;     <div class="footer">

&nbsp;       Tip: <b>Guts</b> is generally lowest priority; raise passively unless you’re min-maxing for PvP finals.

&nbsp;     </div>

&nbsp;   </div>

&nbsp; </div>



<script>

&nbsp; // Master mapping for (distance x style) → priority order

&nbsp; // Order uses only the four main stats most relevant to decisions.

&nbsp; const PRIORITY = {

&nbsp;   short:  { // ≤1400m

&nbsp;     nige:   \["Speed","Power","Wit","Stamina"],

&nbsp;     senko:  \["Speed","Power","Wit","Stamina"],

&nbsp;     sashi:  \["Speed","Power","Wit","Stamina"],

&nbsp;     oikomi: \["Power","Speed","Wit","Stamina"]

&nbsp;   },

&nbsp;   mile: { // 1400–1800m

&nbsp;     nige:   \["Speed","Power","Wit","Stamina"],

&nbsp;     senko:  \["Speed","Power","Wit","Stamina"],

&nbsp;     sashi:  \["Speed","Power","Wit","Stamina"],

&nbsp;     oikomi: \["Power","Speed","Wit","Stamina"]

&nbsp;   },

&nbsp;   middle: { // 1800–2400m

&nbsp;     nige:   \["Speed","Stamina","Wit","Power"],

&nbsp;     senko:  \["Speed","Stamina","Power","Wit"],

&nbsp;     sashi:  \["Speed","Power","Wit","Stamina"],

&nbsp;     oikomi: \["Power","Speed","Wit","Stamina"]

&nbsp;   },

&nbsp;   long: { // 2400m+

&nbsp;     nige:   \["Stamina","Speed","Wit","Power"],

&nbsp;     senko:  \["Stamina","Speed","Power","Wit"],

&nbsp;     sashi:  \["Stamina","Speed","Power","Wit"],

&nbsp;     oikomi: \["Stamina","Power","Speed","Wit"]

&nbsp;   }

&nbsp; };



&nbsp; // Short, helpful notes to accompany each combo

&nbsp; const NOTES = {

&nbsp;   nige: {

&nbsp;     short:  "Front-runners on sprints win by raw speed; keep a little stamina to avoid late fade.",

&nbsp;     mile:   "Speed rules; add Power for early lane contests, Wit to avoid wasted moves.",

&nbsp;     middle: "Secure enough Stamina to hold pace; Wit helps maintain clean lines.",

&nbsp;     long:   "Stamina check is critical; then build Speed for the finish."

&nbsp;   },

&nbsp;   senko: {

&nbsp;     short:  "Balanced controller: Speed + Power to hold front pack.",

&nbsp;     mile:   "Still speed-first; Stamina second so you don’t gas out in midrace pushes.",

&nbsp;     middle: "Classic balanced build; Stamina then Power for tempo changes.",

&nbsp;     long:   "Endurance first, then Speed to answer late challenges."

&nbsp;   },

&nbsp;   sashi: {

&nbsp;     short:  "Overtakes happen fast—Power fuels your kick; Wit keeps you from getting boxed.",

&nbsp;     mile:   "Same idea as short but fights are longer; keep Wit decent.",

&nbsp;     middle: "Power + Wit decide your final 400m pathing.",

&nbsp;     long:   "Don’t be late—meet the stamina bar first, then Speed/Power for the push."

&nbsp;   },

&nbsp;   oikomi: {

&nbsp;     short:  "Explosive end sprint: Power first, Speed second.",

&nbsp;     mile:   "Same as short; you need clear acceleration windows.",

&nbsp;     middle: "Power still first—you win in the last 300m.",

&nbsp;     long:   "Long races need Stamina to even reach the kick; then Power → Speed."

&nbsp;   }

&nbsp; };



&nbsp; const distanceEl = document.getElementById('distance');

&nbsp; const styleEl = document.getElementById('style');

&nbsp; const orderEl = document.getElementById('order');

&nbsp; const notesEl = document.getElementById('notes');



&nbsp; function render() {

&nbsp;   const d = distanceEl.value;

&nbsp;   const s = styleEl.value;

&nbsp;   const order = PRIORITY\[d]\[s];

&nbsp;   orderEl.innerHTML = ''; // clear



&nbsp;   order.forEach((stat, idx) => {

&nbsp;     const chip = document.createElement('div');

&nbsp;     chip.className = 'chip';

&nbsp;     const rank = document.createElement('span');

&nbsp;     rank.className = 'rank';

&nbsp;     rank.textContent = (idx + 1);

&nbsp;     const label = document.createElement('span');

&nbsp;     label.textContent = stat;

&nbsp;     chip.appendChild(rank);

&nbsp;     chip.appendChild(label);

&nbsp;     orderEl.appendChild(chip);

&nbsp;   });



&nbsp;   notesEl.textContent = NOTES\[s]\[d];

&nbsp; }



&nbsp; // Initialize with defaults and listen for changes

&nbsp; \[distanceEl, styleEl].forEach(el => el.addEventListener('change', render));

&nbsp; render();

</script>

</body>

</html>



