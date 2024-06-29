let div=document.querySelector('div')
//create element
let h2=document.createElement('h2')

//assign the content
h2.innerText="TANISHA JAIN"

//append
// div.appendChild(h2);
// div.prepend(h2);


// div.appendChild('Hi i am tanisha') //not work - wrong
// appendChild accepts only 1 argument
//only html accepted

// div.append('Hi i am tanisha')
// append accepts multiple argument
//string also accepted

div.append('Hi i am tanisha',h2,'Whats up')

div.removeChild(h2);
//one thing at a time


















