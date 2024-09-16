function indexOfIgnoreCase(s1, s2) {
  // write your code here
    const str = s1.toLowerCase();
	const sunStr = s2.toLowerCase();
	const char = sunStr.charAt(0);
	for(let i=0;i<str.length;i++)
		{
			
			if(char===str.charAt(i))
			{
			 console.log(i);
			}
		}
}
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
