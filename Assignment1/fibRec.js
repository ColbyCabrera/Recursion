function fibsRec(n) {
  if (n == 2) {
    return [0, 1];
  }

  const sequence = fibsRec(n - 1);
  const len = sequence.length;
  sequence.push(sequence[len - 1] + sequence[len - 2]);
  return sequence;
}

// one liner
function fibsRec1(n) {
  return n == 2
    ? [0, 1]
    : (seq = fibsRec1(n - 1)).concat(seq[seq.length - 1] + seq[seq.length - 2]);
}

console.log(fibsRec1(8));
