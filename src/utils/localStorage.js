const setJob = (id, data) => {
  const jobs = { ...getJobs() };
  const oldData = jobs[id] || {};
  jobs[id] = { ...oldData, ...data };
  localStorage.setItem("dtJobs", JSON.stringify(jobs));
};

const getJob = (id) => {
  const jobs = getJobs();
  return jobs[id] || null;
};

const getJobs = () => {
  let lsJobs = localStorage.getItem("dtJobs");
  let jobs;
  if (!lsJobs) {
    jobs = {};
  } else {
    jobs = JSON.parse(lsJobs);
  }
  return jobs;
};

const clearJobs = () => localStorage.setItem("dtJobs", JSON.stringify({}));

export { getJob, getJobs, setJob, clearJobs };
