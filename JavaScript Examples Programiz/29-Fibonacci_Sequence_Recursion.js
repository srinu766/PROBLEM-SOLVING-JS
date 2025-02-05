// 0,1,1,2,3,5,8,13,21, ........

// without recution

let n1 = 0,
  n2 = 1,
  num = 10,
  next;

function recution(num) {
  for (let i = 1; i <= num; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
}

recution(num);
