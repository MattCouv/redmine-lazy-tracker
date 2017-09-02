import axios from "axios";
import {
  SET_PROJECTS,
  SET_PROJECTS_BY_ID,
  SET_PROJECTS_ALL_IDS,
  SET_CURRENT_PROJECT,
  UPDATE_PROJECTS
} from "../constants";
import { batchActions } from "redux-batched-actions";
import { isLoading } from "modules/appActions";

const normalizeProjects = projects => {
  return projects.reduce((sum, project) => {
    sum[project.id] = project;
    return sum;
  }, {});
};

export const setProjectsAllIds = projects => {
  return {
    type: SET_PROJECTS_ALL_IDS,
    projects
  };
};

export const setProjectsById = projects => {
  return {
    type: SET_PROJECTS_BY_ID,
    projects
  };
};

export const upadateProjectsById = project => ({
  type: UPDATE_PROJECTS,
  project
});

export const setCurrentProject = id => {
  return {
    type: SET_CURRENT_PROJECT,
    project: id
  };
};

export const getProject = id => {
  const url = `/api/projects/${id}.json`;
  return dispatch => {
    dispatch(isLoading(true));
    return axios.get(url).then(res => {
      return dispatch(
        batchActions(
          [setCurrentProject(id), upadateProjectsById(res.data.project)],
          "LOAD_PROJECT"
        )
      );
    });
  };
};

export const getProjects = () => {
  const url = "/api/projects.json?limit=100";
  return dispatch =>
    axios
      .get(url)
      .then(res => normalizeProjects(res.data.projects))
      .then(projects => {
        return dispatch(
          batchActions(
            [
              setProjectsById(projects),
              setProjectsAllIds(Object.keys(projects))
            ],
            "SET_NORMALIZED_PROJECTS"
          )
        );
      });
};
