'use client';
import { useState } from 'react';

const samples=['Launch a clothing brand in 30 days','Learn AI automation in 8 weeks','Build and launch my first SaaS'];
function makePlan(goal){
 const learning=goal.toLowerCase().includes('learn');
 const stages=learning?
 [['Define outcome','Set the exact skill and measurable finish line.'],['Build foundations','Master the smallest set of core concepts.'],['Practice','Turn theory into focused exercises.'],['Ship a project','Build something real and demonstrable.'],['Review & level up','Measure gaps and choose the next challenge.']]:
 [['Clarify','Define the outcome, audience and success metric.'],['Validate','Test the riskiest assumption before investing deeply.'],['Build','Create the smallest version that delivers real value.'],['Launch','Put it in front of real people and collect signals.'],['Optimize','Use feedback and metrics to improve what matters.']];
 return stages.map((s,i)=>({title:s[0],desc:s[1],phase:i===0?'Today':`Phase ${i+1}`,priority:i<2?'HIGH':'FOCUS'}));
}
export default function Home(){
 const [goal,setGoal]=useState(''); const [plan,setPlan]=useState([]); const [loading,setLoading]=useState(false);
 function generate(){if(!goal.trim())return;setLoading(true);setPlan([]);setTimeout(()=>{setPlan(makePlan(goal));setLoading(false)},900)}
 return <main>
  <nav><div className="brand"><span className="mark">N</span>NEXUS <b>AI</b></div><span className="live"><i/> SYSTEM ONLINE</span></nav>
  <section className="hero"><div className="eyebrow">AI GOAL ORCHESTRATION</div><h1>Turn ambition<br/>into <em>action.</em></h1><p>Describe what you want to achieve. NEXUS transforms it into a clear, visual roadmap you can actually execute.</p>
   <div className="composer"><textarea value={goal} onChange={e=>setGoal(e.target.value)} placeholder="What do you want to achieve?"/><button onClick={generate}>{loading?'THINKING…':'BUILD MY ROADMAP →'}</button></div>
   <div className="samples"><span>TRY</span>{samples.map(x=><button key={x} onClick={()=>setGoal(x)}>{x}</button>)}</div>
  </section>
  {(loading||plan.length>0)&&<section className="workspace"><header><div><small>MISSION</small><h2>{goal}</h2></div><div className="score"><strong>{loading?'…':'5'}</strong><span>PHASES</span></div></header>
   {loading?<div className="scan"><div/><p>NEXUS is decomposing your objective…</p></div>:<div className="roadmap">{plan.map((x,i)=><article key={x.title}><div className="node"><span>{String(i+1).padStart(2,'0')}</span></div><div className="card"><div className="meta"><span>{x.phase}</span><b>{x.priority}</b></div><h3>{x.title}</h3><p>{x.desc}</p><label><input type="checkbox"/> Mark complete</label></div></article>)}</div>}
   {!loading&&<div className="insight"><span>✦ NEXUS INSIGHT</span><p>Your fastest path is to complete the first two phases before expanding scope. Momentum comes from reducing uncertainty, not adding tasks.</p></div>}
  </section>}
  <footer>Built for humans who ship. <span>NEXUS AI / 2026</span></footer>
 </main>;
}
