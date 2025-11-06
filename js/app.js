class calcultor{
  a;
  b;
  oper;
  constructor(pA,pB,pOper){
    this.a = +pA,     
    this.b = +pB,        
    this.oper = pOper
  }
  sum() {
    return this.a + this.b
  }
  sub() {
    return this.a - this.b
  }
  mul() {
    return this.a * this.b
  }
  div() {
  }
  result() {
    if(this.oper == '+'){
      return this.sum()
    } else if (this.oper == '-'){
      return this.sub()
    } else if (this.oper == '*'){
      return this.mul()
    } else if (this.oper == '/'){
      return this.div()
    }
  }
}

let btn = document.querySelector('button')

btn.addEventListener('click', () => {
  let inputs = document.querySelectorAll('input');
  let select = document.querySelector('select'); 

  let a = inputs[0].value;
  let b = inputs[1].value;
  let oper = select.value;

  const calc = new calcultor(a, b, oper);
  let result = calc.result();
  document.querySelector('span').innerText = result;
})
