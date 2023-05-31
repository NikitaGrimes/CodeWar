//https://www.codewars.com/kata/550cb646b9e7b565d600048a

function roundRobin(jobs, slice, index){
  let finish = jobs.map(job => job - Math.ceil(jobs[index] / slice) * slice);
  let sum = 0;
  for (let i = 0; i < jobs.length; i++){
    if (i > index)
      finish[i] += slice;
    if (finish[i] <= 0)
      sum += jobs[i];
    else
      sum += jobs[i] - finish[i];
  }
  return sum;
}
