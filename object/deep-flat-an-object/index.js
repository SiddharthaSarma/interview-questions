const obj = {
  A: "1",
  B: null,
  C: {
    D: {
      E: "test",
    },
    F: {
      G: {
        J: "hello",
        K: "abcd",
      },
    },
  },
  H: {
    I: [10, 20],
  },
};

/*
  expected output
  A: '1',
  B: null,
  C.D.E : 'test',
  C.F.G: 'hello',
  H.G.0: 10,
  H.G.1: 20
*/

function solution(input, prefix = "") {
  let result = {};
  for (const k in input) {
    const val = input[k];
    if (val && typeof val === "object") {
      result = { ...result, ...solution(input[k], k + "." + prefix) };
    } else {
      result[prefix + k] = val;
    }
  }
  return result;
}

console.log(solution(obj));
