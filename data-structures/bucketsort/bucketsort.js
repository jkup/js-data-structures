function bucketSort(a) {
  var r = [], b = [], v, c;
  for (v of a) (b[v] || (b[v] = [])).push(v);
  for (c of b) if (c != null) for each (v in c) r.push(v);
  return r;
}

/*
 * Tests
**/
var array = [2, 4, 1, 5, 3];
bucketSort(array);
