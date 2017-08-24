export const setProjects = projects => {
  return {
    type: "SET_PROJECTS",
    projects
  };
};

export const getCurrentProject = (projects, projectID) => {
  if (projectID === 0) {
    return projects[0] || { name: "Auccun projet" };
  }
  const currentProject = projects.filter(project => {
    return project.id == projectID;
  });
  if (currentProject === undefined) {
    return { name: "Auccun projet" };
  }
  return currentProject[0];
};
