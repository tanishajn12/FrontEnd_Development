let div=document.querySelector('div')

//create element
let h2=document.createElement('h2')
let p = document.createElement('p');

//assign the content
h2.innerText="TANISHA JAIN"
p.innerText="I am 20 years old"

//appendChild -> append only single at a time
div.appendChild(h2);
div.appendChild(p);
// div.appendChild(h2,p); //error -> wrong way -> appendChild accepts only 1 argument
// div.appendChild('Hi i am tanisha') //error - wrong

//-----------------------------------------------------
//append() -> append multiple argument at a time

// div.append(h2); //correct
// div.append(h2,p); //correct

// div.append('Web dev is very very imp ') //string also accepted
// div.append('Hi i am tanisha','Whats up', p) //multiple arguments
// div.append('<h1>wow its so amazing</h1>') //understang tag as string


//-----------------------------------------------------
//remove() -> only 1 argument at a time
p.remove() 

//removeChild() -> one at a time
div.removeChild(h2); 

// --------------------------------------------------
// starting mei add
// a single element can either be appended or prepended
// div.prepend('todays weather is amazing') 
// div.prepend(p, h2) 

//multiple prepend arguments ? YES

//--------------------------------------------------
// div.before(h2);s
// div.after(h2);















