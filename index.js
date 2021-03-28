
const c = function compose(x){
  afunct(x);
}

function afunct(x){
  bfunct(x);
}

function bfunct(x){
  return x
}


c(1) === afunct(bfunct(1)); // true