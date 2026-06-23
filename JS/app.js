
  // Typed terminal intro
  const lines = [
    { type:'cmd', prompt:'~ $', text:'whoami' },
    { type:'out', text:'kharazm_saeedi — junior web developer' },
    { type:'cmd', prompt:'~ $', text:'cat skills.txt' },
    { type:'out', text:'HTML · CSS · Tailwind · Git · C++ · Network+' },
    { type:'cmd', prompt:'~ $', text:'./run portfolio.sh' }
  ];

  const termBody = document.getElementById('termBody');
  let li = 0, ci = 0;

  function typeLine(){
    if(li >= lines.length){ return; }
    const line = lines[li];
    const row = document.createElement('div');
    row.className = 'ln';
    termBody.appendChild(row);

    if(line.type === 'cmd'){
      const promptSpan = document.createElement('span');
      promptSpan.className = 'prompt';
      promptSpan.textContent = line.prompt;
      const cmdSpan = document.createElement('span');
      cmdSpan.className = 'cmd';
      row.appendChild(promptSpan);
      row.appendChild(cmdSpan);

      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      row.appendChild(cursor);

      let i = 0;
      const text = line.text;
      const typer = setInterval(() => {
        cmdSpan.textContent += text[i];
        i++;
        if(i >= text.length){
          clearInterval(typer);
          cursor.remove();
          li++;
          setTimeout(typeLine, 220);
        }
      }, 38);
    } else {
      row.classList.add('out');
      row.textContent = line.text;
      li++;
      setTimeout(typeLine, 320);
    }
  }
  typeLine();

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); } });
  }, { threshold: 0.12 });
  reveals.forEach(el => obs.observe(el));
