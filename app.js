let container=document.getElementById('container');
let die=[];
class Dice{
    constructor(){
        this.div=document.createElement("div");
        container.appendChild(this.div);
        this.val=0;
        this.roll();
        this.div.addEventListener('click',this.roll.bind(this));
        this.div.addEventListener('dblclick',this.delete.bind(this));
    }

    roll(){
        let p=document.createElement("p");
        let val=Math.floor(Math.random()*6)+1;
        let text=document.createTextNode(val);
        p.appendChild(text);
        if(this.div.hasChildNodes()){
            this.div.removeChild(this.div.childNodes[0]);
        }
        this.val=val;
        this.div.appendChild(p);
    }

    delete(){
        container.removeChild(this.div);
        let ind=die.indexOf(this);
        if(ind>-1){
            die.splice(ind,1);
        }
    }
}


document.addEventListener("DOMContentLoaded",()=>{
    let generateBtn=document.getElementById("genDice");
    generateBtn.addEventListener('click',()=>{
        let dice=new Dice();
        die.push(dice);
    })
    let rollBtn=document.getElementById("rollDice");
    rollBtn.addEventListener('click',()=>{
        for(let i=0;i<die.length;i++){
            die[i].roll();
        }
    })
    let sumBtn=document.getElementById('sumDice');
    sumBtn.addEventListener('click',()=>{
        let sum=0;
        for(let i=0;i<die.length;i++){
            sum+=die[i].val;
        }
        alert(`Sum of all die is ${sum}!!!`);
    })
})