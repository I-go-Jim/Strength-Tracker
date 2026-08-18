const DEFAULT_EXERCISES=[
 {id:'bench-press',name:'Bench Press',defaultSets:5,reps:5,step:5},
 {id:'weighted-pull-ups',name:'Weighted Pull-Ups',defaultSets:5,reps:5,step:5},
 {id:'standing-ohp',name:'Standing OHP',defaultSets:4,reps:5,step:5},
 {id:'barbell-row',name:'Barbell Row',defaultSets:4,reps:8,step:5},
 {id:'dips',name:'Dips',defaultSets:4,reps:8,step:5},
 {id:'hammer-curl',name:'Hammer Curl',defaultSets:3,reps:10,step:5},
 {id:'back-squat',name:'Back Squat',defaultSets:5,reps:5,step:10},
 {id:'deadlift',name:'Deadlift',defaultSets:3,reps:5,step:10},
 {id:'bulgarian-split-squat',name:'Bulgarian Split Squat',defaultSets:3,reps:8,step:5},
 {id:'leg-curl',name:'Leg Curl',defaultSets:3,reps:10,step:5},
 {id:'pinky-crushers',name:'Pinky Crushers',defaultSets:3,reps:12,step:5},
 {id:'weighted-back-extension',name:'Weighted Back Extension',defaultSets:3,reps:12,step:5},
 {id:'incline-db-bench',name:'Incline DB Bench',defaultSets:5,reps:10,step:5},
 {id:'chest-supported-row',name:'Chest Supported Row',defaultSets:4,reps:10,step:5},
 {id:'seated-db-press',name:'Seated DB Press',defaultSets:4,reps:10,step:5},
 {id:'lat-pulldown',name:'Lat Pulldown',defaultSets:3,reps:12,step:5},
 {id:'lateral-raise',name:'Lateral Raise',defaultSets:4,reps:15,step:5},
 {id:'triceps-pushdown',name:'Triceps Pushdown',defaultSets:3,reps:15,step:5},
 {id:'ez-bar-curl',name:'EZ Bar Curl',defaultSets:3,reps:12,step:5},
 {id:'front-squat',name:'Front Squat',defaultSets:4,reps:8,step:10},
 {id:'romanian-deadlift',name:'Romanian Deadlift',defaultSets:4,reps:8,step:10},
 {id:'leg-extension',name:'Leg Extension',defaultSets:4,reps:15,step:5},
 {id:'leg-press',name:'Leg Press',defaultSets:3,reps:15,step:10},
 {id:'calf-raise',name:'Calf Raise',defaultSets:4,reps:15,step:5},
 {id:'ab-wheel',name:'Ab Wheel',defaultSets:4,reps:10,step:5}
];
const DEFAULT_WORKOUTS=[
 {id:'upper-strength',name:'Upper Strength',day:'Monday',exerciseIds:['bench-press','weighted-pull-ups','standing-ohp','barbell-row','dips','hammer-curl']},
 {id:'lower-strength',name:'Lower Strength',day:'Tuesday',exerciseIds:['back-squat','deadlift','bulgarian-split-squat','leg-curl','pinky-crushers','weighted-back-extension']},
 {id:'upper-volume',name:'Upper Volume',day:'Thursday',exerciseIds:['incline-db-bench','chest-supported-row','seated-db-press','lat-pulldown','lateral-raise','triceps-pushdown','ez-bar-curl']},
 {id:'lower-volume',name:'Lower Volume',day:'Friday',exerciseIds:['front-squat','romanian-deadlift','leg-extension','leg-press','calf-raise','ab-wheel']}
];
const STORE='seanStrengthTrackerV12';
const DRAFT_STORE='seanStrengthTrackerDraftV4';
const WORKOUT_REWARD=5;
const REWARD_DURATION_MS=45*60*1000;
const STORE_THEMES=[
  {id:'light',name:'Light',price:0,description:'The original clean, bright theme.'},
  {id:'dark',name:'Dark',price:15,description:'A low-light theme for evening workouts.'},
  {id:'forest',name:'Forest',price:20,description:'A deep green theme inspired by the outdoors.'},
  {id:'america',name:'America',price:25,description:'Bold red, white, and blue from sea to shining sea.'},
  {id:'love',name:'Love',price:30,description:'Warm blush tones with plenty of heart.'},
  {id:'hero',name:'Comic Hero',price:35,description:'Punchy primary colors straight from a comic panel.'},
  {id:'ocean',name:'Ocean',price:40,description:'Cool blues and seafoam for a calm training flow.'},
  {id:'neon',name:'Neon Night',price:45,description:'Electric color on a midnight backdrop.'},
  {id:'poop',name:'Poop',price:50,description:'Earthy brown, golden tan, and absolutely no shame.'},
  {id:'jurassic',name:'Jurassic Park',price:55,description:'Primeval jungle greens, amber, and volcanic red.'},
  {id:'poozer',name:'Poozer',price:100,description:'The legendary purple-and-gold final form.'},
  {id:'kawaii',name:'Kawaii Kitties',price:100,description:'Pastel colors with an original parade of cartoon cats.'}
];
const STORE_EXTRAS=[
  {id:'celebration-none',category:'celebration',name:'No Celebration',price:0,icon:'—',description:'Save workouts without an animation.'},
  {id:'celebration-confetti',category:'celebration',name:'Confetti',price:35,icon:'🎉',description:'A colorful burst after every saved workout.'},
  {id:'celebration-fireworks',category:'celebration',name:'Fireworks',price:45,icon:'🎆',description:'Light up the screen when the work is done.'},
  {id:'celebration-lightning',category:'celebration',name:'Lightning',price:55,icon:'⚡',description:'Finish every workout with electric energy.'},
  {id:'celebration-coins',category:'celebration',name:'Raining Coins',price:65,icon:'🪙',description:'Make it rain after completing a workout.'},
  {id:'trophy-none',category:'trophy',name:'No Trophy',price:0,icon:'—',description:'Keep your profile display simple.'},
  {id:'trophy-plate',category:'trophy',name:'Golden Plate',price:40,icon:'🥇',description:'A golden weight-plate trophy for your profile.'},
  {id:'trophy-nut',category:'trophy',name:'Golden Nut',price:45,icon:'🥜',description:'A prestigious golden nut. Nobody knows why.'},
  {id:'trophy-poozer',category:'trophy',name:'Golden Poozer',price:100,icon:'💩',description:'The rarest symbol of Poozer excellence.'},
  {id:'title-none',category:'title',name:'No Title',price:0,icon:'—',description:'Use no profile title.'},
  {id:'title-iron-addict',category:'title',name:'Iron Addict',price:30,icon:'🏋️',description:'For lifters who always want one more set.'},
  {id:'title-gym-goblin',category:'title',name:'Gym Goblin',price:35,icon:'👹',description:'Lives in the gym and guards the dumbbells.'},
  {id:'title-poozer-ceo',category:'title',name:'Poozer CEO',price:100,icon:'👑',description:'Executive leadership for serious Poozers.'},
  {id:'timer-standard',category:'timer',name:'Standard Timer',price:0,icon:'00:00',description:'The original clean timer design.'},
  {id:'timer-windows95',category:'timer',name:'Windows 95',price:35,icon:'95',description:'Classic gray panels and old-school controls.'},
  {id:'timer-comic',category:'timer',name:'Comic Style',price:45,icon:'POW!',description:'Bold outlines straight from a comic panel.'},
  {id:'timer-arcade',category:'timer',name:'Retro Arcade',price:50,icon:'88:88',description:'Pixel-inspired neon arcade timing.'},
  {id:'timer-digital',category:'timer',name:'Digital',price:30,icon:'12:34',description:'Bright digits on a dark electronic display.'},
  {id:'cards-standard',category:'cards',name:'Standard Cards',price:0,icon:'▤',description:'The original workout card design.'},
  {id:'cards-metal',category:'cards',name:'Metal Plates',price:70,icon:'⚙️',description:'Industrial steel cards built for heavy work.'},
  {id:'cards-comic',category:'cards',name:'Comic Panels',price:75,icon:'BAM!',description:'Heavy outlines, bright panels, and action.'},
  {id:'cards-notebook',category:'cards',name:'Notebook',price:80,icon:'📓',description:'Lined-paper workout cards with handwritten flair.'},
  {id:'cards-holographic',category:'cards',name:'Holographic',price:135,icon:'◇',description:'A shifting premium finish for workout cards.'}
];
const STORE_CATEGORIES={
  celebration:{label:'Completion Celebrations',description:'Played after completing and saving a workout.'},
  trophy:{label:'Trophies',description:'Display one trophy beside your profile title.'},
  title:{label:'Profile Titles',description:'Choose the title shown in the app header.'},
  timer:{label:'Timer Designs',description:'Restyle the workout and rest timers.'},
  cards:{label:'Workout Card Styles',description:'Change the appearance of exercise cards during workouts.'}
};
const DEFAULT_STORE_ITEMS={
  celebration:'celebration-none',
  trophy:'trophy-none',
  title:'title-none',
  timer:'timer-standard',
  cards:'cards-standard'
};
const ACHIEVEMENT_LEVELS={
  easy:{label:'Easy',coins:5},
  medium:{label:'Medium',coins:20},
  hard:{label:'Hard',coins:50},
  veryHard:{label:'Very Hard',coins:100},
  legendary:{label:'Legendary',coins:1}
};
const ACHIEVEMENTS=[
  {id:'workouts-1',name:'First Step',description:'Complete 1 workout',level:'easy',type:'workouts',target:1},
  {id:'workouts-5',name:'Finding Your Rhythm',description:'Complete 5 workouts',level:'easy',type:'workouts',target:5},
  {id:'workouts-10',name:'Building the Habit',description:'Complete 10 workouts',level:'easy',type:'workouts',target:10},
  {id:'weekly-3',name:'Three-Day Week',description:'Train on 3 distinct days in one week',level:'easy',type:'weeklyDays',target:3},
  {id:'bench-135',name:'Bench Club',description:'Bench 135 lb',level:'easy',type:'lift',lift:'bench-press',target:135},
  {id:'squat-225',name:'Squat Club',description:'Squat 225 lb',level:'easy',type:'lift',lift:'back-squat',target:225},
  {id:'deadlift-315',name:'Deadlift Club',description:'Deadlift 315 lb',level:'easy',type:'lift',lift:'deadlift',target:315},
  {id:'ohp-95',name:'Press Club',description:'Standing OHP 95 lb',level:'easy',type:'lift',lift:'standing-ohp',target:95},
  {id:'sets-100',name:'Century Setter',description:'Record 100 completed working sets',level:'easy',type:'sets',target:100},
  {id:'total-700',name:'700 lb Club',description:'Reach a 700 lb combined total',level:'easy',type:'total',target:700},
  {id:'workouts-25',name:'Staying Consistent',description:'Complete 25 workouts',level:'medium',type:'workouts',target:25},
  {id:'weekly-4',name:'Four-Day Focus',description:'Train on 4 distinct days in one week',level:'medium',type:'weeklyDays',target:4},
  {id:'rotation-4',name:'Full Rotation',description:'Complete each of the four workout templates',level:'medium',type:'rotation',target:4},
  {id:'ohp-135',name:'Strong Shoulders',description:'Standing OHP 135 lb',level:'medium',type:'lift',lift:'standing-ohp',target:135},
  {id:'streak-6',name:'Six-Week Streak',description:'Train during 6 consecutive weeks',level:'medium',type:'streak',target:6},
  {id:'total-800',name:'800 lb Club',description:'Reach an 800 lb combined total',level:'medium',type:'total',target:800},
  {id:'workouts-48',name:'Program Finisher',description:'Complete 48 workouts',level:'hard',type:'workouts',target:48},
  {id:'bench-225',name:'Elite Bench Club',description:'Bench 225 lb',level:'hard',type:'lift',lift:'bench-press',target:225},
  {id:'squat-315',name:'Elite Squat Club',description:'Squat 315 lb',level:'hard',type:'lift',lift:'back-squat',target:315},
  {id:'deadlift-405',name:'Elite Deadlift Club',description:'Deadlift 405 lb',level:'hard',type:'lift',lift:'deadlift',target:405},
  {id:'ohp-185',name:'Elite Press Club',description:'Standing OHP 185 lb',level:'hard',type:'lift',lift:'standing-ohp',target:185},
  {id:'volume-1000000',name:'Iron Millionaire',description:'Lift 1,000,000 lb in cumulative training volume',level:'hard',type:'volume',target:1000000},
  {id:'total-900',name:'900 lb Club',description:'Reach a 900 lb combined total',level:'hard',type:'total',target:900},
  {id:'workouts-100',name:'Year-Round Strength',description:'Complete 100 workouts',level:'veryHard',type:'workouts',target:100},
  {id:'bench-315',name:'CEO of Bench Club',description:'Bench 315 lb',level:'veryHard',type:'lift',lift:'bench-press',target:315},
  {id:'squat-405',name:'CEO of Squat Club',description:'Squat 405 lb',level:'veryHard',type:'lift',lift:'back-squat',target:405},
  {id:'deadlift-495',name:'CEO of Deadlift Club',description:'Deadlift 495 lb',level:'veryHard',type:'lift',lift:'deadlift',target:495},
  {id:'ohp-225',name:'CEO of Press Club',description:'Standing OHP 225 lb',level:'veryHard',type:'lift',lift:'standing-ohp',target:225},
  {id:'total-1000',name:'1,000 lb Club',description:'Reach a 1,000 lb combined total',level:'veryHard',type:'total',target:1000},
  {id:'total-1100',name:'1,100 lb Club',description:'Reach a 1,100 lb combined total',level:'veryHard',type:'total',target:1100},
  {id:'ultimate-poozer',name:'Ultimate Poozer',description:'Own the Poozer theme, Golden Poozer trophy, and Poozer CEO title',level:'legendary',type:'poozerPurchases',target:3}
];

let raw=localStorage.getItem(STORE)||localStorage.getItem('seanStrengthTrackerV11')||localStorage.getItem('seanStrengthTrackerV10')||localStorage.getItem('seanStrengthTrackerV9')||localStorage.getItem('seanStrengthTrackerV8')||localStorage.getItem('seanStrengthTrackerV6_1')||localStorage.getItem('seanStrengthTrackerV6')||localStorage.getItem('seanStrengthTrackerV5')||localStorage.getItem('seanStrengthTrackerV4')||localStorage.getItem('seanStrengthTrackerV2')||localStorage.getItem('seanStrengthTrackerV1');
const parsed=raw?JSON.parse(raw):null;
const state={selected:null,data:parsed&&parsed.exercises&&parsed.workouts?parsed:{history:parsed?.history||[],exercises:DEFAULT_EXERCISES.slice(),workouts:DEFAULT_WORKOUTS.slice()}};
if(!state.data.exercises)state.data.exercises=DEFAULT_EXERCISES.slice();
if(!state.data.workouts)state.data.workouts=DEFAULT_WORKOUTS.slice();
normalizeRewardData();

let workoutTimerInterval=null,workoutStartTime=null,restTimerInterval=null,restStartTime=null,restElapsedBeforePause=0,restRunning=false;
let workoutDurationStart=null;

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];

function persist(){localStorage.setItem(STORE,JSON.stringify(state.data));}
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function normalizeRewardData(){
  const coins=Number(state.data.coins);
  state.data.coins=Number.isFinite(coins)?coins:0;
  if(state.data.rewardVersion!==2){
    const previousThemes=Array.isArray(state.data.ownedThemes)?state.data.ownedThemes:[];
    state.data.ownedThemes=['light',...previousThemes.filter(theme=>theme==='forest')];
    state.data.rewardVersion=2;
  }
  if(!Array.isArray(state.data.ownedThemes))state.data.ownedThemes=['light'];
  const validThemes=new Set(STORE_THEMES.map(theme=>theme.id));
  state.data.ownedThemes=[...new Set(state.data.ownedThemes.filter(theme=>validThemes.has(theme)))];
  if(!state.data.ownedThemes.includes('light'))state.data.ownedThemes.push('light');
  if(!Array.isArray(state.data.redeemedCheatCodes))state.data.redeemedCheatCodes=[];
  if(!Array.isArray(state.data.ownedStoreItems))state.data.ownedStoreItems=[];
  const validStoreItems=new Set(STORE_EXTRAS.map(item=>item.id));
  state.data.ownedStoreItems=[...new Set(state.data.ownedStoreItems.filter(id=>validStoreItems.has(id)))];
  Object.values(DEFAULT_STORE_ITEMS).forEach(id=>{if(!state.data.ownedStoreItems.includes(id))state.data.ownedStoreItems.push(id)});
  if(!state.data.activeStoreItems||typeof state.data.activeStoreItems!=='object')state.data.activeStoreItems={};
  Object.entries(DEFAULT_STORE_ITEMS).forEach(([category,fallback])=>{
    const active=state.data.activeStoreItems[category];
    const item=STORE_EXTRAS.find(candidate=>candidate.id===active&&candidate.category===category);
    state.data.activeStoreItems[category]=item&&state.data.ownedStoreItems.includes(active)?active:fallback;
  });
  if(!Array.isArray(state.data.unlockedAchievements))state.data.unlockedAchievements=[];
  const validAchievements=new Set(ACHIEVEMENTS.map(achievement=>achievement.id));
  state.data.unlockedAchievements=[...new Set(state.data.unlockedAchievements.filter(id=>validAchievements.has(id)))];
  if(state.data.activeTheme==='default')state.data.activeTheme='light';
  if(!state.data.activeTheme||!state.data.ownedThemes.includes(state.data.activeTheme))state.data.activeTheme='light';
}
function renderCoinBalance(){
  const element=$('#storeCoinBalance');
  if(element)element.textContent=state.data.coins;
}
function applyTheme(theme){
  document.body.classList.remove('dark',...STORE_THEMES.map(item=>`theme-${item.id}`));
  if(theme==='dark')document.body.classList.add('dark');
  if(!['light','dark'].includes(theme))document.body.classList.add(`theme-${theme}`);
  localStorage.setItem('strengthDark',String(theme==='dark'));
}
function activeStoreItem(category){
  return STORE_EXTRAS.find(item=>item.id===state.data.activeStoreItems[category])||null;
}
function applyStoreCosmetics(){
  STORE_EXTRAS.filter(item=>['timer','cards'].includes(item.category)).forEach(item=>document.body.classList.remove(`cosmetic-${item.id}`));
  ['timer','cards'].forEach(category=>{
    const id=state.data.activeStoreItems[category];
    if(id&&id!==DEFAULT_STORE_ITEMS[category])document.body.classList.add(`cosmetic-${id}`);
  });
  renderProfileShowcase();
}
function renderProfileShowcase(){
  const el=$('#profileShowcase');
  if(!el)return;
  const trophy=activeStoreItem('trophy');
  const title=activeStoreItem('title');
  const hasTrophy=trophy&&trophy.price>0;
  const hasTitle=title&&title.price>0;
  el.classList.toggle('hidden',!hasTrophy&&!hasTitle);
  el.innerHTML=`${hasTrophy?`<span class="profile-trophy" title="${trophy.name}">${trophy.icon}</span>`:''}${hasTitle?`<strong>${title.name}</strong>`:''}`;
}
function showCompletionCelebration(){
  const celebration=activeStoreItem('celebration');
  if(!celebration||celebration.price===0)return;
  document.querySelector('.completion-celebration')?.remove();
  const overlay=document.createElement('div');
  const symbols={
    'celebration-confetti':['🎉','◆','●','★','■'],
    'celebration-fireworks':['🎆','✨','🎇','✨','🎆'],
    'celebration-lightning':['⚡','⚡','💪','⚡','⚡'],
    'celebration-coins':['🪙','🪙','💰','🪙','🪙']
  }[celebration.id]||[celebration.icon];
  overlay.className=`completion-celebration ${celebration.id}`;
  overlay.innerHTML=`<strong>Workout Complete!</strong>${symbols.map((symbol,index)=>`<span style="--i:${index}">${symbol}</span>`).join('')}`;
  document.body.appendChild(overlay);
  setTimeout(()=>overlay.remove(),2600);
}
function showUltimatePoozerCelebration(){
  document.querySelector('.completion-celebration')?.remove();
  const overlay=document.createElement('div');
  const symbols=['🎆','✨','💩','✨','🎇'];
  overlay.className='completion-celebration celebration-fireworks ultimate-poozer-celebration';
  overlay.innerHTML=`<strong>Ultimate Poozer!</strong>${symbols.map((symbol,index)=>`<span style="--i:${index}">${symbol}</span>`).join('')}`;
  document.body.appendChild(overlay);
  setTimeout(()=>overlay.remove(),3200);
}

function saveDraft(){
  if(state.selected===null)return;
  const draft={
    selected:state.selected,
    date:$('#workoutDate')?.value||null,
    workoutStartTime,
    workoutDurationStart,
    exercises:[...document.querySelectorAll('.exercise-card')].map(card=>({
      idx:Number(card.dataset.idx),
      weight:card.querySelector('.weight-input')?.value||'',
      sets:[...card.querySelectorAll('.set-cell input')].map(i=>i.value||'')
    }))
  };
  localStorage.setItem(DRAFT_STORE,JSON.stringify(draft));
}
function clearDraft(){localStorage.removeItem(DRAFT_STORE)}
function loadDraft(){const rawDraft=localStorage.getItem(DRAFT_STORE);return rawDraft?JSON.parse(rawDraft):null}
function isDraftInProgress(){const draft=loadDraft();return !!(draft&&draft.selected!==null)}

function showView(n){
  document.body.classList.toggle('workout-mode',n==='workout');
  $$('.view').forEach(v=>v.classList.remove('active'));
  const target=$('#'+n+'View');
  if(target)target.classList.add('active');
  $$('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===n));
  if(n==='history')renderHistory();
  if(n==='exercises')renderExerciseLibrary();
  if(n==='templates')renderTemplates();
  if(n==='achievements')renderAchievements();
  if(n==='store')renderStore();
  if(n==='home')renderHome();
  scrollTo(0,0);
}

function validDateString(value){return /^\d{4}-\d{2}-\d{2}$/.test(value||'')&&!Number.isNaN(new Date(value+'T00:00:00').getTime())}
function programStartDate(){const dates=(state.data.history||[]).map(w=>w.date).filter(validDateString).sort();return dates[0]||null}
function weekForDate(value){const start=programStartDate();if(!start||!validDateString(value))return 1;const startDate=new Date(start+'T00:00:00'),target=new Date(value+'T00:00:00');const days=Math.floor((target-startDate)/86400000);return Math.max(1,Math.floor(days/7)+1)}
function currentProgramWeek(){return weekForDate(new Date().toISOString().slice(0,10))}
function weekLabel(week){return `Week ${week}${[6,12].includes(Number(week))?' (Deload)':''}`}
function formatProgramDate(value){if(!validDateString(value))return 'Starts with first saved workout';return `Started ${new Date(value+'T00:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})}`}
function recalculateProgramWeeks(){delete state.data.startDate;delete state.data.week;(state.data.history||[]).forEach(workout=>{workout.programWeek=weekForDate(workout.date)})}
function allEntries(name){return state.data.history.flatMap(w=>w.exercises.filter(e=>e.name===name).map(e=>({...e,date:w.date,type:w.type,programWeek:w.programWeek||null})))}
function lastEntry(name){const a=allEntries(name);return a[a.length-1]||null}
function e1rm(weight,reps){return weight&&reps?Math.round(weight*(1+reps/30)):0}
function bestE1RM(name){return Math.max(0,...allEntries(name).flatMap(e=>e.reps.map(r=>e1rm(e.weight,r))))}
function formatDuration(ms){const total=Math.max(0,Math.floor(ms/1000)),h=Math.floor(total/3600),m=Math.floor((total%3600)/60),s=total%60;return h?`${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`:`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
function mainWeights(){return ['Bench Press','Back Squat','Deadlift','Standing OHP']}
function exerciseById(id){return state.data.exercises.find(e=>e.id===id)||null}
function workoutById(id){return state.data.workouts.find(w=>w.id===id)||null}
function exerciseNameList(){return [...new Set(state.data.exercises.map(e=>e.name))]}
function clampSets(v){return Math.max(1,Math.min(10,Number(v)||1))}

function liftIdForEntry(entry){
  if(['bench-press','back-squat','deadlift','standing-ohp'].includes(entry.exerciseId))return entry.exerciseId;
  const names={'bench press':'bench-press','back squat':'back-squat',deadlift:'deadlift','standing ohp':'standing-ohp'};
  return names[String(entry.name||'').trim().toLowerCase()]||null;
}
function workoutVolume(workout){
  return (workout.exercises||[]).reduce((total,entry)=>{
    const weight=Math.max(0,Number(entry.weight)||0);
    const reps=(entry.reps||[]).reduce((sum,value)=>sum+Math.max(0,Number(value)||0),0);
    return total+weight*reps;
  },0);
}
function formatVolume(value){return `${Math.round(value).toLocaleString()} lb`}
function mondayForDate(value){
  if(!validDateString(value))return null;
  const [year,month,day]=value.split('-').map(Number);
  const date=new Date(Date.UTC(year,month-1,day));
  const offset=(date.getUTCDay()+6)%7;
  date.setUTCDate(date.getUTCDate()-offset);
  return date.toISOString().slice(0,10);
}
function achievementStats(){
  const history=Array.isArray(state.data.history)?state.data.history:[];
  const liftWeights={'bench-press':0,'back-squat':0,deadlift:0,'standing-ohp':0};
  const weeklyDates=new Map();
  const completedTemplates=new Set();
  let sets=0,volume=0;
  history.forEach(workout=>{
    const week=mondayForDate(workout.date);
    if(week){
      if(!weeklyDates.has(week))weeklyDates.set(week,new Set());
      weeklyDates.get(week).add(workout.date);
    }
    const template=state.data.workouts.find(item=>item.id===workout.workoutId||item.name===workout.type)
      ||DEFAULT_WORKOUTS.find(item=>item.name===workout.type);
    if(template)completedTemplates.add(template.id);
    (workout.exercises||[]).forEach(entry=>{
      const lift=liftIdForEntry(entry);
      const weight=Number(entry.weight)||0;
      const completedReps=(entry.reps||[]).filter(reps=>Number(reps)>0);
      sets+=completedReps.length;
      volume+=Math.max(0,weight)*completedReps.reduce((total,reps)=>total+Number(reps),0);
      if(lift&&weight>0&&completedReps.length)liftWeights[lift]=Math.max(liftWeights[lift],weight);
    });
  });
  const weeks=[...weeklyDates.keys()].sort();
  let streak=0,currentStreak=0,previous=null;
  weeks.forEach(week=>{
    const time=new Date(week+'T00:00:00Z').getTime();
    currentStreak=previous!==null&&time-previous===7*86400000?currentStreak+1:1;
    streak=Math.max(streak,currentStreak);
    previous=time;
  });
  return{
    workouts:history.length,
    weeklyDays:Math.max(0,...[...weeklyDates.values()].map(dates=>dates.size)),
    liftWeights,
    sets,
    volume,
    rotation:completedTemplates.size,
    streak,
    poozerPurchases:[
      state.data.ownedThemes.includes('poozer'),
      state.data.ownedStoreItems.includes('trophy-poozer'),
      state.data.ownedStoreItems.includes('title-poozer-ceo')
    ].filter(Boolean).length,
    total:liftWeights['bench-press']+liftWeights['back-squat']+liftWeights.deadlift
  };
}
function achievementValue(achievement,stats){
  if(achievement.type==='workouts')return stats.workouts;
  if(achievement.type==='weeklyDays')return stats.weeklyDays;
  if(achievement.type==='lift')return stats.liftWeights[achievement.lift]||0;
  if(achievement.type==='sets')return stats.sets;
  if(achievement.type==='volume')return stats.volume;
  if(achievement.type==='rotation')return stats.rotation;
  if(achievement.type==='streak')return stats.streak;
  if(achievement.type==='poozerPurchases')return stats.poozerPurchases;
  return stats.total;
}
function achievementProgressText(achievement,value){
  if(achievement.type==='workouts')return `${Math.min(value,achievement.target)} / ${achievement.target} workouts`;
  if(achievement.type==='weeklyDays')return `${Math.min(value,achievement.target)} / ${achievement.target} days`;
  if(achievement.type==='sets')return `${Math.min(value,achievement.target)} / ${achievement.target} sets`;
  if(achievement.type==='volume')return `${formatVolume(Math.min(value,achievement.target))} / ${formatVolume(achievement.target)}`;
  if(achievement.type==='rotation')return `${Math.min(value,achievement.target)} / ${achievement.target} templates`;
  if(achievement.type==='streak')return `${Math.min(value,achievement.target)} / ${achievement.target} weeks`;
  if(achievement.type==='poozerPurchases')return `${Math.min(value,achievement.target)} / ${achievement.target} Poozer items`;
  return `${Math.min(value,achievement.target)} / ${achievement.target} lb`;
}
function revokeInvalidAchievements(){
  const stats=achievementStats();
  const revoked=[];
  state.data.unlockedAchievements=state.data.unlockedAchievements.filter(id=>{
    const achievement=ACHIEVEMENTS.find(item=>item.id===id);
    const valid=achievement&&achievementValue(achievement,stats)>=achievement.target;
    if(achievement&&!valid)revoked.push(achievement);
    return valid;
  });
  const coins=revoked.reduce((total,achievement)=>total+ACHIEVEMENT_LEVELS[achievement.level].coins,0);
  state.data.coins-=coins;
  return{revoked,coins};
}

function renderHome(){
  const week=currentProgramWeek();
  $('#weekNumber').textContent=weekLabel(week);
  $('#programStartText').textContent=formatProgramDate(programStartDate());
  $('#dashboardGrid').innerHTML=mainWeights().map(n=>{const l=lastEntry(n);return`<div class="metric-card"><span>${n}</span><strong>${l?l.weight+' lb':'--'}</strong><span>${l?l.reps.join('/'):'No entry yet'}</span></div>`}).join('');
  const draft=loadDraft();
  const draftArea=$('#draftResumeArea');
  if(draft&&draft.selected!==null){
    const draftWorkout=workoutById(draft.selected);
    draftArea.classList.remove('hidden');
    draftArea.innerHTML=`<div class="draft-resume-card"><div><strong>Workout in progress</strong><small>${draftWorkout?draftWorkout.name:'Draft workout'}${draft.date?' · '+draft.date:''}</small></div><div class="resume-actions"><button id="continueDraftFromHomeBtn" type="button" class="secondary">Continue workout</button><button id="discardDraftBtn" type="button" class="discard-btn">Discard</button></div></div>`;
    $('#continueDraftFromHomeBtn').onclick=()=>resumeDraftWorkout();
    $('#discardDraftBtn').onclick=()=>discardDraftWorkout();
  }else{
    draftArea.classList.add('hidden');
    draftArea.innerHTML='';
  }
  const el=$('#workoutButtons');
  el.innerHTML='';
  state.data.workouts.forEach(w=>{
    const b=document.createElement('button');
    b.className='workout-choice';
    b.innerHTML=`<strong>${w.name}</strong><span>${w.exerciseIds.length} exercises</span><span class="workout-day">${w.day}</span>`;
    b.onclick=()=>startWorkoutFromHome(w.id);
    b.disabled=draft&&draft.selected!==null;
    el.appendChild(b);
  });
}

function startWorkoutFromHome(workoutId){
  if(isDraftInProgress()){
    toast('Workout in progress.');
    return;
  }
  openWorkout(workoutId);
}

function openWorkout(workoutId){
  const workout=workoutById(workoutId)||state.data.workouts[0];
  if(!workout)return;
  state.selected=workout.id;
  $('#workoutTitle').textContent=workout.name;
  $('#workoutDate').value=new Date().toISOString().slice(0,10);
  resetRestTimer();
  renderWorkoutEditor(workout);
  startWorkoutTimerFresh();
  showView('workout');
}

function resumeDraftWorkout(){
  const draft=loadDraft();
  if(!draft)return;
  const workout=workoutById(draft.selected)||state.data.workouts[0];
  if(!workout)return;
  state.selected=workout.id;
  $('#workoutTitle').textContent=workout.name;
  renderWorkoutEditor(workout);
  $('#workoutDate').value=draft.date||new Date().toISOString().slice(0,10);
  startWorkoutTimerFromDraft(draft);
  showView('workout');
}

function discardDraftWorkout(){
  clearDraft();
  stopWorkoutTimer();
  resetRestTimer();
  workoutDurationStart=null;
  state.selected=null;
  renderHome();
  toast('Draft workout discarded');
}

function renderWorkoutEditor(workout){
  const wrap=$('#exerciseList');
  if(!wrap)return;
  wrap.innerHTML='';
  workout.exerciseIds.forEach((exerciseId,idx)=>{
    const ex=exerciseById(exerciseId);
    if(!ex)return;
    const last=lastEntry(ex.name),best=bestE1RM(ex.name);
    const reps=Number(ex.reps)||0;
    const card=document.createElement('article');
    card.className='exercise-card';
    card.dataset.idx=idx;
    card.innerHTML=`<div class="exercise-head"><div><h3>${ex.name}${best?'<span class="pr-badge">e1RM '+best+'</span>':''}</h3><span class="goal">${ex.defaultSets} × ${reps}</span></div><div class="weight-wrap"><label>Weight</label><div class="weight-controls"><button type="button" class="weight-adjust" data-adjust="-5" aria-label="Decrease weight by 5 pounds">-5</button><input class="weight-input" type="number" step="5" inputmode="decimal" value="${last?.weight??''}" placeholder="lb"><button type="button" class="weight-adjust" data-adjust="5" aria-label="Increase weight by 5 pounds">+5</button></div></div></div>${last?`<div class="last-line">Last: ${last.weight} lb × ${last.reps.join(' / ')} on ${last.date}</div>`:''}<div class="sets-label">Sets and reps</div><div class="sets-grid" style="--sets:${ex.defaultSets}">${Array.from({length:ex.defaultSets},(_,i)=>`<div class="set-cell"><label>S${i+1}</label><input inputmode="numeric" maxlength="3" aria-label="${ex.name} set ${i+1} reps"></div>`).join('')}</div><div class="recommendation hold">Enter all sets to see progression</div>`;
    wrap.appendChild(card);
    card.querySelectorAll('.weight-adjust').forEach(button=>button.addEventListener('click',()=>{
      const input=card.querySelector('.weight-input');
      input.value=(Number(input.value)||0)+Number(button.dataset.adjust);
      saveDraft();
      updateRecommendation(card,ex);
    }));
    card.querySelectorAll('.set-cell input').forEach(i=>i.addEventListener('input',()=>{saveDraft();updateRecommendation(card,ex)}));
  });
  if(loadDraft()?.selected===state.selected)restoreDraftIntoRenderedWorkout();
}

function restoreDraftIntoRenderedWorkout(){
  const draft=loadDraft();
  if(!draft||draft.selected!==state.selected)return;
  [...document.querySelectorAll('.exercise-card')].forEach(card=>{
    const draftItem=draft.exercises.find(x=>x.idx===Number(card.dataset.idx));
    if(!draftItem)return;
    const weight=card.querySelector('.weight-input');
    if(weight)weight.value=draftItem.weight||'';
    [...card.querySelectorAll('.set-cell input')].forEach((input,i)=>{input.value=draftItem.sets?.[i]||''});
  });
  const dateInput=$('#workoutDate');
  if(draft.date&&dateInput)dateInput.value=draft.date;
}

function updateRecommendation(card,ex){
  const reps=[...card.querySelectorAll('.set-cell input')].map(i=>Number(i.value)),out=card.querySelector('.recommendation');
  if(reps.some(r=>!r)){out.className='recommendation hold';out.textContent='Enter all sets to see progression';return}
  const earned=reps.every(r=>r>=Number(ex.reps)||0),weight=Number(card.querySelector('.weight-input').value)||0;
  out.className='recommendation '+(earned?'increase':'hold');
  out.textContent=earned?(ex.step?`Increase next time to ${weight+ex.step} lb`:'Top range completed'):'Keep the same weight next time';
}

function updateWorkoutTimerDisplay(){
  if(!workoutStartTime)return;
  const el=$('#workoutElapsed');
  if(el)el.textContent=formatDuration(Date.now()-workoutStartTime);
}
function startWorkoutTimerFresh(){
  workoutStartTime=Date.now();
  workoutDurationStart=workoutStartTime;
  clearInterval(workoutTimerInterval);
  workoutTimerInterval=setInterval(updateWorkoutTimerDisplay,1000);
  updateWorkoutTimerDisplay();
  saveDraft();
}
function startWorkoutTimerFromDraft(draft){
  workoutStartTime=draft.workoutStartTime||Date.now();
  workoutDurationStart=draft.workoutDurationStart||workoutStartTime;
  clearInterval(workoutTimerInterval);
  workoutTimerInterval=setInterval(updateWorkoutTimerDisplay,1000);
  updateWorkoutTimerDisplay();
  saveDraft();
}
function stopWorkoutTimer(){
  clearInterval(workoutTimerInterval);
  workoutTimerInterval=null;
  workoutStartTime=null;
  const el=$('#workoutElapsed');
  if(el)el.textContent='00:00';
}

function updateRestControls(){const btn=$('#restStartBtn');if(!btn)return;btn.textContent=restRunning?'Stop':'Start';btn.classList.toggle('stop',restRunning);btn.classList.toggle('start',!restRunning)}
function updateRestDisplay(){const elapsed=restElapsedBeforePause+(restRunning?Date.now()-restStartTime:0);const el=$('#restElapsed');if(el)el.textContent=formatDuration(elapsed);updateRestControls()}
function startRestTimer(){if(restRunning){stopRestTimer();return}restRunning=true;restStartTime=Date.now();clearInterval(restTimerInterval);restTimerInterval=setInterval(updateRestDisplay,1000);updateRestDisplay()}
function stopRestTimer(){if(!restRunning)return;restElapsedBeforePause+=Date.now()-restStartTime;restRunning=false;clearInterval(restTimerInterval);restTimerInterval=null;updateRestDisplay()}
function resetRestTimer(){clearInterval(restTimerInterval);restTimerInterval=null;restRunning=false;restStartTime=null;restElapsedBeforePause=0;const el=$('#restElapsed');if(el)el.textContent='00:00';updateRestControls()}

function saveWorkout(){
  const date=$('#workoutDate').value;
  if(!validDateString(date)){toast('Choose a valid workout date');return}
  const workout=workoutById(state.selected);
  const durationMs=workoutDurationStart?Date.now()-workoutDurationStart:null;
  const exercises=workout?.exerciseIds.map((exerciseId,idx)=>{
    const ex=exerciseById(exerciseId);
    const card=$(`.exercise-card[data-idx="${idx}"]`);
    return{
      exerciseId,
      name:ex.name,
      weight:Number(card.querySelector('.weight-input').value)||0,
      reps:[...card.querySelectorAll('.set-cell input')].map(i=>Number(i.value)||0)
    };
  })||[];
  if(exercises.some(e=>e.reps.some(r=>r===0))){toast('Enter reps for every set');return}
  const coinsAwarded=durationMs>REWARD_DURATION_MS?WORKOUT_REWARD:0;
  state.data.history.push({id:Date.now(),date,type:workout.name,workoutId:workout.id,programWeek:1,durationMs,coinsAwarded,exercises});
  state.data.coins+=coinsAwarded;
  recalculateProgramWeeks();
  const savedWorkout=state.data.history[state.data.history.length-1];
  persist();
  clearDraft();
  stopWorkoutTimer();
  resetRestTimer();
  workoutDurationStart=null;
  toast(coinsAwarded?`Workout saved · +${coinsAwarded} coins`:`Workout saved · ${weekLabel(savedWorkout.programWeek)}`);
  showView('history');
  showCompletionCelebration();
}

function renderHistory(){
  const el=$('#historyList');
  if(!el)return;
  const totalVolume=(state.data.history||[]).reduce((total,workout)=>total+workoutVolume(workout),0);
  const volumeSummary=$('#historyVolumeSummary');
  if(volumeSummary)volumeSummary.innerHTML=`<span>Lifetime working-weight volume</span><strong>${formatVolume(totalVolume)}</strong>`;
  el.innerHTML=state.data.history.length?state.data.history.slice().reverse().map(w=>{
    const timeText=typeof w.durationMs==='number'&&w.durationMs>0?formatDuration(w.durationMs):'--';
    return`<details class="card history-item"><summary><div class="history-summary-row"><div class="history-left"><strong class="history-workout-name">${w.type}</strong><span class="history-time" style="display:inline-block;margin-left:18px;min-width:64px;">${timeText}</span><small class="history-volume">${formatVolume(workoutVolume(w))} volume</small></div><div class="history-right"><span class="history-date">${w.date}${[6,12].includes(Number(w.programWeek))?' (Deload)':''}</span><button class="trash-btn" data-delete-id="${w.id}" aria-label="Delete ${w.type} on ${w.date}" title="Delete workout">🗑</button></div></div></summary><div class="history-details">${w.exercises.map(e=>{const best=Math.max(...e.reps.map(r=>e1rm(e.weight,r)));return`<div class="history-exercise"><strong>${e.name}</strong><span>${e.weight||'Bodyweight'}${e.weight?' lb':''}</span><small>Reps: ${e.reps.join(' / ')}${best?' · e1RM '+best:''}</small></div>`}).join('')}</div></details>`;
  }).join(''):'<div class="card"><h3>No workouts saved yet</h3><p>Complete a workout and it will appear here.</p></div>';
  el.querySelectorAll('.trash-btn').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();deleteWorkout(Number(button.dataset.deleteId))}));
  renderExerciseSelect();
}

function deleteWorkout(id){
  const workout=state.data.history.find(item=>Number(item.id)===Number(id));
  if(!workout)return;
  if(!confirm(`Delete ${workout.type} from ${workout.date}?`))return;
  state.data.history=state.data.history.filter(item=>Number(item.id)!==Number(id));
  const workoutCoins=Math.max(0,Number(workout.coinsAwarded)||0);
  state.data.coins-=workoutCoins;
  recalculateProgramWeeks();
  const achievementRevocation=revokeInvalidAchievements();
  const removedCoins=workoutCoins+achievementRevocation.coins;
  persist();
  renderHome();
  renderHistory();
  renderCoinBalance();
  renderAchievements();
  const revokedCount=achievementRevocation.revoked.length;
  toast(`Workout deleted${revokedCount?` · ${revokedCount} achievement${revokedCount===1?'':'s'} revoked`:''}${removedCoins?` · -${removedCoins} coins`:''}`);
}

function renderExerciseSelect(){
  const s=$('#exerciseSelect');
  if(!s)return;
  const old=s.value;
  s.innerHTML=exerciseNameList().map(n=>`<option>${n}</option>`).join('');
  if(old)s.value=old;
  renderExerciseHistory();
}

function renderExerciseHistory(){
  const name=$('#exerciseSelect')?.value||exerciseNameList()[0]||'';
  const entries=allEntries(name),best=bestE1RM(name),last=entries.at(-1);
  const stats=$('#exerciseStats');
  if(stats)stats.innerHTML=`<div class="stat"><span>Last load</span><strong>${last?last.weight+' lb':'--'}</strong></div><div class="stat"><span>Best e1RM</span><strong>${best||'--'}</strong></div><div class="stat"><span>Sessions</span><strong>${entries.length}</strong></div>`;
  const list=$('#exerciseHistoryList');
  if(list)list.innerHTML=entries.slice().reverse().map(e=>`<div class="card exercise-log"><strong>${e.date}</strong><span>${e.weight} lb · ${e.reps.join('/')}</span><span class="e1rm">e1RM ${Math.max(...e.reps.map(r=>e1rm(e.weight,r)))}</span></div>`).join('')||'<div class="card"><p>No entries yet.</p></div>';
  if(entries.length)drawChart(entries);
}

function renderExerciseLibrary(){
  const el=$('#exerciseLibraryList');
  if(!el)return;
  el.innerHTML=`<div class="exercise-library-grid">${state.data.exercises.map(ex=>`<div class="exercise-item" data-id="${ex.id}"><div class="exercise-item-head"><strong>${ex.name}</strong></div><div class="exercise-meta"><label>Name<input data-field="name" value="${ex.name}"></label><label>Sets<input data-field="defaultSets" type="number" value="${clampSets(ex.defaultSets)}" max="10"></label><label>Reps<input data-field="reps" type="number" value="${ex.reps}"></label></div><div class="exercise-actions"><button class="secondary" data-save-exercise="${ex.id}">Save</button><button class="danger" data-delete-exercise="${ex.id}">Delete</button></div></div>`).join('')}</div>`;
  el.querySelectorAll('[data-save-exercise]').forEach(btn=>btn.onclick=()=>saveExercise(btn.dataset.saveExercise));
  el.querySelectorAll('[data-delete-exercise]').forEach(btn=>btn.onclick=()=>deleteExercise(btn.dataset.deleteExercise));
}

function addExercise(){
  const id=`exercise-${Date.now()}`;
  state.data.exercises.push({id,name:'New Exercise',defaultSets:3,reps:10,step:5});
  persist();
  renderExerciseLibrary();
  renderExerciseSelect();
  renderHome();
  requestAnimationFrame(()=>{
    const card=$(`.exercise-item[data-id="${id}"]`);
    const nameInput=card?.querySelector('[data-field="name"]');
    nameInput?.focus({preventScroll:true});
    nameInput?.select();
    card?.scrollIntoView({behavior:'smooth',block:'center'});
  });
}

function saveExercise(id){
  const card=$(`.exercise-item[data-id="${id}"]`);
  const ex=state.data.exercises.find(x=>x.id===id);
  if(!card||!ex)return;
  ex.name=card.querySelector('[data-field="name"]').value.trim()||'Unnamed Exercise';
  ex.defaultSets=clampSets(card.querySelector('[data-field="defaultSets"]').value);
  ex.reps=Number(card.querySelector('[data-field="reps"]').value)||0;
  persist();
  renderExerciseLibrary();
  renderExerciseSelect();
  renderHome();
  toast('Exercise saved');
}

function deleteExercise(id){
  state.data.exercises=state.data.exercises.filter(x=>x.id!==id);
  state.data.workouts.forEach(w=>w.exerciseIds=w.exerciseIds.filter(exId=>exId!==id));
  persist();
  renderExerciseLibrary();
  renderHome();
  renderExerciseSelect();
  toast('Exercise deleted');
}

function renderTemplates(){
  const el=$('#templateList');
  if(!el)return;
  el.innerHTML=`<div class="template-list">${state.data.workouts.map(w=>{const options=exerciseNameList().map(n=>`<option>${n}</option>`).join('');return`<div class="template-card" data-template-id="${w.id}"><div class="template-head"><strong>${w.name}</strong><button class="secondary" data-save-template="${w.id}">Save</button></div><div class="template-meta"><label>Name<input data-field="template-name" value="${w.name}"></label><label>Day<select data-field="template-day"><option${w.day==='Monday'?' selected':''}>Monday</option><option${w.day==='Tuesday'?' selected':''}>Tuesday</option><option${w.day==='Wednesday'?' selected':''}>Wednesday</option><option${w.day==='Thursday'?' selected':''}>Thursday</option><option${w.day==='Friday'?' selected':''}>Friday</option><option${w.day==='Saturday'?' selected':''}>Saturday</option><option${w.day==='Sunday'?' selected':''}>Sunday</option></select></label></div><div class="template-exercises">${w.exerciseIds.map((id,idx)=>{const ex=exerciseById(id);return`<div class="template-exercise" data-exercise-index="${idx}"><strong>${ex?ex.name:'Missing exercise'}</strong><button class="move-btn" data-move-up="${idx}">↑</button><button class="move-btn" data-move-down="${idx}">↓</button><button class="remove-btn" data-remove-exercise="${idx}">Remove</button></div>`}).join('')}</div><div class="template-add-row"><select data-add-select>${options}</select><button class="primary" data-add-exercise-to-template="${w.id}">Add exercise</button></div></div>`}).join('')}</div>`;
  el.querySelectorAll('[data-save-template]').forEach(btn=>btn.onclick=()=>saveTemplate(btn.dataset.saveTemplate));
  el.querySelectorAll('[data-remove-exercise]').forEach(btn=>btn.onclick=()=>removeExerciseFromTemplate(btn.closest('.template-card').dataset.templateId,Number(btn.dataset.removeExercise)));
  el.querySelectorAll('[data-move-up]').forEach(btn=>btn.onclick=()=>moveExerciseInTemplate(btn.closest('.template-card').dataset.templateId,Number(btn.dataset.moveUp),-1));
  el.querySelectorAll('[data-move-down]').forEach(btn=>btn.onclick=()=>moveExerciseInTemplate(btn.closest('.template-card').dataset.templateId,Number(btn.dataset.moveDown),1));
  el.querySelectorAll('[data-add-exercise-to-template]').forEach(btn=>btn.onclick=()=>addExerciseToTemplate(btn.dataset.addExerciseToTemplate));
}

function saveTemplate(id){
  const card=$(`.template-card[data-template-id="${id}"]`);
  const w=workoutById(id);
  if(!card||!w)return;
  w.name=card.querySelector('[data-field="template-name"]').value.trim()||w.name;
  w.day=card.querySelector('[data-field="template-day"]').value;
  persist();
  renderHome();
  renderTemplates();
  toast('Template saved');
}

function addExerciseToTemplate(id){
  const card=$(`.template-card[data-template-id="${id}"]`);
  const w=workoutById(id);
  if(!card||!w)return;
  const selected=card.querySelector('[data-add-select]').value;
  const ex=state.data.exercises.find(e=>e.name===selected);
  if(!ex){toast('Pick an exercise');return}
  w.exerciseIds.push(ex.id);
  persist();
  renderTemplates();
  renderHome();
  toast('Exercise added');
}

function removeExerciseFromTemplate(templateId,index){
  const w=workoutById(templateId);
  if(!w)return;
  w.exerciseIds.splice(index,1);
  persist();
  renderTemplates();
  renderHome();
  toast('Exercise removed');
}

function moveExerciseInTemplate(templateId,index,direction){
  const w=workoutById(templateId);
  if(!w)return;
  const next=index+direction;
  if(next<0||next>=w.exerciseIds.length)return;
  [w.exerciseIds[index],w.exerciseIds[next]]=[w.exerciseIds[next],w.exerciseIds[index]];
  persist();
  renderTemplates();
  renderHome();
}

function claimAchievementRewards(ids){
  const requested=new Set(ids);
  const stats=achievementStats();
  const unlocked=new Set(state.data.unlockedAchievements);
  const claimed=ACHIEVEMENTS.filter(achievement=>requested.has(achievement.id)&&!unlocked.has(achievement.id)&&achievementValue(achievement,stats)>=achievement.target);
  if(!claimed.length){toast('No achievement rewards available');return}
  const coins=claimed.reduce((total,achievement)=>total+ACHIEVEMENT_LEVELS[achievement.level].coins,0);
  state.data.unlockedAchievements.push(...claimed.map(achievement=>achievement.id));
  state.data.coins+=coins;
  persist();
  renderCoinBalance();
  renderAchievements();
  toast(`${claimed.length===1?claimed[0].name:`${claimed.length} achievements`} claimed · +${coins} coins`);
  if(claimed.some(achievement=>achievement.id==='ultimate-poozer'))showUltimatePoozerCelebration();
}

function renderAchievements(){
  const el=$('#achievementList');
  if(!el)return;
  const stats=achievementStats();
  const unlocked=new Set(state.data.unlockedAchievements);
  const completed=ACHIEVEMENTS.filter(achievement=>achievementValue(achievement,stats)>=achievement.target);
  const available=completed.filter(achievement=>!unlocked.has(achievement.id));
  $('#achievementSummary').innerHTML=`<div><strong>${completed.length} of ${ACHIEVEMENTS.length}</strong><span>achievements completed · ${unlocked.size} claimed</span></div>${available.length?`<button id="claimAllAchievements" class="primary" type="button">Claim all (${available.length})</button>`:''}`;
  el.innerHTML=Object.entries(ACHIEVEMENT_LEVELS).map(([level,details])=>{
    const cards=ACHIEVEMENTS.filter(achievement=>achievement.level===level).map(achievement=>{
      const claimed=unlocked.has(achievement.id);
      const value=achievementValue(achievement,stats);
      const complete=value>=achievement.target;
      const percent=complete?100:Math.min(100,Math.round(value/achievement.target*100));
      const rewardLabel=achievement.id==='ultimate-poozer'&&!claimed?'????':details.coins;
      const reward=complete&&!claimed?`<button class="primary achievement-claim" data-claim-achievement="${achievement.id}" type="button">Claim +${rewardLabel}</button>`:`<strong class="achievement-reward">+${rewardLabel}</strong>`;
      return`<article class="achievement-card ${claimed?'unlocked':complete?'claimable':'locked'}"><div class="achievement-icon" aria-hidden="true">${claimed?'✓':complete?'!':'◇'}</div><div class="achievement-info"><div class="achievement-title"><h3>${achievement.name}</h3><span class="difficulty ${level}">${details.label}</span></div><p>${achievement.description}</p><div class="achievement-progress"><span style="width:${percent}%"></span></div><small>${claimed?'Claimed':complete?'Completed · reward ready':achievementProgressText(achievement,value)}</small></div>${reward}</article>`;
    }).join('');
    const tierReward=level==='legendary'?'???? coins':`${details.coins} coins each`;
    return`<section class="achievement-tier"><h2>${details.label}<span>${tierReward}</span></h2>${cards}</section>`;
  }).join('');
  $('#claimAllAchievements')?.addEventListener('click',()=>claimAchievementRewards(available.map(achievement=>achievement.id)));
  el.querySelectorAll('[data-claim-achievement]').forEach(button=>button.addEventListener('click',()=>claimAchievementRewards([button.dataset.claimAchievement])));
}

function renderStore(){
  renderCoinBalance();
  const el=$('#storeItems');
  if(!el)return;
  const themeCards=STORE_THEMES.map(theme=>{
    const owned=state.data.ownedThemes.includes(theme.id);
    const active=state.data.activeTheme===theme.id;
    const disabled=active||(!owned&&state.data.coins<theme.price);
    const label=active?'Active':owned?'Use theme':`Buy for ${theme.price} coins`;
    return`<article class="store-item"><div class="theme-preview theme-preview-${theme.id}"><span></span><span></span><span></span></div><div><h3>${theme.name}</h3><p>${theme.description}</p></div><button class="${owned?'secondary':'primary'}" data-theme-id="${theme.id}"${disabled?' disabled':''}>${label}</button></article>`;
  }).join('');
  const extraSections=Object.entries(STORE_CATEGORIES).map(([category,details])=>{
    const cards=STORE_EXTRAS.filter(item=>item.category===category).map(item=>{
      const owned=state.data.ownedStoreItems.includes(item.id);
      const active=state.data.activeStoreItems[category]===item.id;
      const disabled=active||(!owned&&state.data.coins<item.price);
      const label=active?'Active':owned?'Use item':`Buy for ${item.price} coins`;
      return`<article class="store-item cosmetic-store-item"><div class="cosmetic-preview preview-${item.id}">${item.icon}</div><div><h3>${item.name}</h3><p>${item.description}</p></div><button class="${owned?'secondary':'primary'}" data-store-item-id="${item.id}"${disabled?' disabled':''}>${label}</button></article>`;
    }).join('');
    return`<section class="store-category"><div class="store-category-heading"><h2>${details.label}</h2><p>${details.description}</p></div>${cards}</section>`;
  }).join('');
  el.innerHTML=`<section class="store-category"><div class="store-category-heading"><h2>Themes</h2><p>Change the complete color palette of the app.</p></div>${themeCards}</section>${extraSections}`;
  el.querySelectorAll('[data-theme-id]').forEach(button=>button.onclick=()=>buyOrActivateTheme(button.dataset.themeId));
  el.querySelectorAll('[data-store-item-id]').forEach(button=>button.onclick=()=>buyOrActivateStoreItem(button.dataset.storeItemId));
}

function buyOrActivateTheme(id){
  const theme=STORE_THEMES.find(item=>item.id===id);
  if(!theme)return;
  if(!state.data.ownedThemes.includes(id)){
    if(state.data.coins<theme.price){toast('Not enough coins');return}
    state.data.coins-=theme.price;
    state.data.ownedThemes.push(id);
  }
  state.data.activeTheme=id;
  applyTheme(id);
  persist();
  renderStore();
  toast(`${theme.name} theme active`);
}
function buyOrActivateStoreItem(id){
  const item=STORE_EXTRAS.find(candidate=>candidate.id===id);
  if(!item)return;
  if(!state.data.ownedStoreItems.includes(id)){
    if(state.data.coins<item.price){toast('Not enough coins');return}
    state.data.coins-=item.price;
    state.data.ownedStoreItems.push(id);
  }
  state.data.activeStoreItems[item.category]=id;
  applyStoreCosmetics();
  persist();
  renderStore();
  toast(`${item.name} active`);
}

function redeemCheatCode(){
  const input=$('#cheatCodeInput');
  const code=input.value.trim();
  const rewards={
    Ronald:{coins:6969,message:'+6969 coins'},
    'Nick is a poozer':{coins:30,message:'Thanks for beta testing'}
  };
  const reward=rewards[code];
  if(!reward){toast('Invalid cheat code');return}
  if(state.data.redeemedCheatCodes.includes(code)){toast('Cheat code already redeemed');return}
  state.data.coins+=reward.coins;
  state.data.redeemedCheatCodes.push(code);
  input.value='';
  persist();
  renderStore();
  toast(reward.message);
}

function resetThemePurchases(){
  const purchasedThemes=STORE_THEMES.filter(theme=>theme.price>0&&state.data.ownedThemes.includes(theme.id));
  const purchasedItems=STORE_EXTRAS.filter(item=>item.price>0&&state.data.ownedStoreItems.includes(item.id));
  const purchaseCount=purchasedThemes.length+purchasedItems.length;
  if(!purchaseCount){toast('No purchases to reset');return}
  const refund=[...purchasedThemes,...purchasedItems].reduce((total,item)=>total+item.price,0);
  if(!confirm(`Reset ${purchaseCount} purchase${purchaseCount===1?'':'s'} and refund ${refund} coins?`))return;
  state.data.coins+=refund;
  state.data.ownedThemes=['light'];
  state.data.activeTheme='light';
  state.data.ownedStoreItems=Object.values(DEFAULT_STORE_ITEMS);
  state.data.activeStoreItems={...DEFAULT_STORE_ITEMS};
  applyTheme('light');
  applyStoreCosmetics();
  const achievementRevocation=revokeInvalidAchievements();
  persist();
  renderStore();
  renderAchievements();
  toast(`Purchases reset · +${refund-achievementRevocation.coins} coins`);
}

function drawChart(entries){
  const canvas=$('#progressChart');
  if(!canvas)return;
  const ctx=canvas.getContext('2d'),dpr=window.devicePixelRatio||1,w=canvas.clientWidth||700,h=300;
  canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
  const values=entries.map(entry=>Math.max(...entry.reps.map(reps=>e1rm(entry.weight,reps))));
  const styles=getComputedStyle(document.body),muted=styles.getPropertyValue('--muted').trim()||'#657482',grid=styles.getPropertyValue('--line').trim()||'#d8e0e6';
  const margin={left:54,right:12,top:18,bottom:78},plotWidth=w-66,plotHeight=h-96;
  ctx.font='11px system-ui';ctx.fillStyle=muted;ctx.strokeStyle=grid;ctx.lineWidth=1;ctx.textBaseline='middle';
  if(!values.length){ctx.textAlign='center';ctx.fillText('No data yet',w/2,h/2);return}
  let minimum=Math.min(...values),maximum=Math.max(...values);
  const padding=Math.max(5,Math.ceil((maximum-minimum||10)*.15));
  minimum=Math.floor((minimum-padding)/5)*5;
  maximum=Math.ceil((maximum+padding)/5)*5;
  if(maximum===minimum)maximum=minimum+10;
  const tickCount=5;
  for(let i=0;i<tickCount;i++){
    const value=Math.round(maximum-i*(maximum-minimum)/(tickCount-1)),y=margin.top+i*plotHeight/(tickCount-1);
    ctx.beginPath();ctx.moveTo(margin.left,y);ctx.lineTo(w-margin.right,y);ctx.stroke();
    ctx.textAlign='right';ctx.fillText(String(value),margin.left-7,y)
  }
  ctx.save();ctx.translate(14,margin.top+plotHeight/2);ctx.rotate(-Math.PI/2);ctx.textAlign='center';ctx.fillText('Estimated 1RM (lb)',0,0);ctx.restore();
  const pointX=index=>margin.left+(values.length===1?plotWidth/2:index*plotWidth/(values.length-1));
  const pointY=value=>margin.top+(maximum-value)*plotHeight/(maximum-minimum);
  ctx.strokeStyle='#2b75a9';ctx.lineWidth=3;ctx.beginPath();values.forEach((value,index)=>index?ctx.lineTo(pointX(index),pointY(value)):ctx.moveTo(pointX(index),pointY(value)));ctx.stroke();
  ctx.fillStyle='#17365d';values.forEach((value,index)=>{ctx.beginPath();ctx.arc(pointX(index),pointY(value),4,0,Math.PI*2);ctx.fill()});
  const maximumLabels=Math.max(2,Math.floor(plotWidth/80)),stride=Math.max(1,Math.ceil(entries.length/maximumLabels));
  ctx.fillStyle=muted;ctx.font='10px system-ui';ctx.textAlign='right';
  entries.forEach((entry,index)=>{
    if(index%stride&&index!==entries.length-1)return;
    const parsed=new Date(entry.date+'T00:00:00'),date=isNaN(parsed)?entry.date:parsed.toLocaleDateString(undefined,{month:'short',day:'numeric'}),label=date+([6,12].includes(Number(entry.programWeek))?' (Deload)':'');
    ctx.save();ctx.translate(pointX(index),margin.top+plotHeight+11);ctx.rotate(-Math.PI/4);ctx.fillText(label,0,0);ctx.restore()
  });
  ctx.textAlign='center';ctx.fillText('Workout date',margin.left+plotWidth/2,h-8)
}

function exportData(){
  const blob=new Blob([JSON.stringify(state.data,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='strength-tracker-backup.json';
  a.click();
  URL.revokeObjectURL(a.href)
}

function importData(file){
  const r=new FileReader();
  r.onload=()=>{
    try{
      state.data=JSON.parse(r.result);
      if(!state.data.exercises)state.data.exercises=DEFAULT_EXERCISES.slice();
      if(!state.data.workouts)state.data.workouts=DEFAULT_WORKOUTS.slice();
      normalizeRewardData();
      applyTheme(state.data.activeTheme);
      applyStoreCosmetics();
      recalculateProgramWeeks();
      persist();
      renderHome();
      renderHistory();
      renderExerciseLibrary();
      renderTemplates();
      renderAchievements();
      renderStore();
      toast('Backup imported')
    }catch{
      toast('That backup file is invalid')
    }
  };
  r.readAsText(file)
}

function init(){
  applyTheme(state.data.activeTheme);
  applyStoreCosmetics();

  $$('.bottom-nav button').forEach(b=>b.onclick=()=>showView(b.dataset.view));
  $$('[data-go="home"]').forEach(b=>b.onclick=()=>{stopWorkoutTimer();resetRestTimer();showView('home')});

  $$('[data-history]').forEach(b=>b.onclick=()=>{
    $$('[data-history]').forEach(x=>x.classList.toggle('active',x===b));
    $('#workoutHistoryPanel').classList.toggle('hidden',b.dataset.history!=='workouts');
    $('#exerciseHistoryPanel').classList.toggle('hidden',b.dataset.history!=='exercises');
    if(b.dataset.history==='exercises')renderExerciseHistory();
  });

  $('#exerciseSelect')?.addEventListener('change',renderExerciseHistory);
  $('#saveWorkoutBtn')?.addEventListener('click',saveWorkout);
  $('#restStartBtn')?.addEventListener('click',startRestTimer);
  $('#restResetBtn')?.addEventListener('click',resetRestTimer);
  $('#addExerciseBtn')?.addEventListener('click',addExercise);
  $('#exportBtn')?.addEventListener('click',exportData);
  $('#importInput')?.addEventListener('change',e=>e.target.files[0]&&importData(e.target.files[0]));
  $('#cheatCodeForm')?.addEventListener('submit',event=>{event.preventDefault();redeemCheatCode()});
  $('#resetPurchasesBtn')?.addEventListener('click',resetThemePurchases);

  recalculateProgramWeeks();
  persist();
  renderHome();
  renderExerciseLibrary();
  renderTemplates();
  renderAchievements();
  renderStore();

  if('serviceWorker'in navigator)navigator.serviceWorker.register('service-worker.js');
}

init();
