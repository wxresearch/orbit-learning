/* Run with: node scripts/validate-questions.cjs
 * Curated answer fixture is independent of the question bank's correct index.
 * This checks consistency; it cannot mathematically prove arbitrary new explanations.
 */
const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const match=html.match(/const questions=\[([\s\S]*?)\n\];/);
assert(match,'Question bank declaration not found');
const questions=vm.runInNewContext('['+match[1]+']');
const expected=[
['amc10','Algebra','116'],['amc10','Geometry','50'],['amc10','Counting and Probability','1/6'],['amc10','Number Theory','96'],['amc10','Problem-Solving Strategies','37'],
['amc12','Advanced Algebra','18'],['amc12','Geometry','84'],['amc12','Combinatorics','126'],['amc12','Number Theory','4'],['amc12','Trigonometry','7/25'],
['sat','Algebra','10'],['sat','Reading and Writing','Each of the students has a book.'],['act','Math','10'],['act','Science Reasoning','Independent variable'],
['apcalc','Differentiation','3x²'],['apphysics','Kinematics','10 m/s'],['apenv','Populations','Carrying capacity'],['apstats','Exploring One-Variable Data','Median'],
['apeuro','Renaissance and Exploration','Humanism'],['science','Chemistry','Na'],['english','Grammar','softly'],['history','World History','Egyptians']
];
const newExpected=[
['amc10','Algebra','53'],['amc10','Algebra','17'],['amc10','Geometry','60'],['amc10','Geometry','100−25π'],['amc10','Counting and Probability','3/8'],['amc10','Counting and Probability','504'],
['amc10','Number Theory','1'],['amc10','Number Theory','33'],['amc10','Problem-Solving Strategies','13'],['amc10','Problem-Solving Strategies','12 mph'],
['amc12','Advanced Algebra','7'],['amc12','Advanced Algebra','126'],['amc12','Geometry','3'],['amc12','Geometry','24'],['amc12','Combinatorics','80'],['amc12','Combinatorics','1260'],
['amc12','Number Theory','144'],['amc12','Number Theory','9'],['amc12','Trigonometry','5/12'],['amc12','Trigonometry','4/5']
];
assert.equal(questions.length,expected.length+newExpected.length,'Update expected answers for every added or removed question');
const expectedMap=new Map();
for(const [course,topic,answer] of [...expected,...newExpected]){
 const key=course+'|'+topic+'|'+answer;
 expectedMap.set(key,(expectedMap.get(key)||0)+1);
}
const seen=new Set();
for(const q of questions){
 assert(typeof q.q==='string'&&q.q.length>12,'Question stem missing');
 assert(typeof q.course==='string'&&typeof q.topic==='string','Course/topic required');
 assert(Array.isArray(q.a)&&q.a.length===4,'Exactly four options required: '+q.q);
 assert(new Set(q.a).size===4,'Duplicate answer options: '+q.q);
 assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,'Invalid correct index: '+q.q);
 assert(typeof q.why==='string'&&q.why.length>=12,'Explanation missing: '+q.q);
 const id=q.course+'|'+q.q;
 assert(!seen.has(id),'Duplicate question: '+id);seen.add(id);
 const key=q.course+'|'+q.topic+'|'+q.a[q.correct];
 assert(expectedMap.get(key)>0,'Answer differs from independently curated fixture: '+q.q+'; actual '+q.a[q.correct]);
 expectedMap.set(key,expectedMap.get(key)-1);
 if(q.level!==undefined)assert(Number.isInteger(q.level)&&q.level>=1&&q.level<=5,'Difficulty out of range: '+q.q);
}
for(const [key,count] of expectedMap)assert.equal(count,0,'Expected answer not represented: '+key);
console.log('Validated '+questions.length+' questions; choices, difficulty, uniqueness, explanations, curated answer keys all pass.');
