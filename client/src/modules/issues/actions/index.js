import axios from "axios";
import { SET_ISSUES, SET_ISSUE } from "../constants";
import { setCurrentProject } from "modules/projects/actions/";
import { batchActions } from "redux-batched-actions";
import { isLoading } from "modules/appActions";

export const setIssues = issues => {
  return {
    type: SET_ISSUES,
    issues
  };
};
export const setIssue = issue => {
  return {
    type: SET_ISSUE,
    issue
  };
};

export const getIssue = id => {
  const url = `/api/issues/${id}.json?include=attachments,journals`;
  return dispatch => {
    dispatch(isLoading(true));
    setTimeout(function() {
      return axios
        .get(url)
        .then(res => {
          return dispatch(
            batchActions(
              [
                setCurrentProject(res.data.issue.project.id),
                setIssue(res.data.issue),
                isLoading(false)
              ],
              "ISSUES_RETREIVED"
            )
          );
        })
        .catch(error => console.log(error));
    }, 6000);
  };
};

export const getProjectIssues = (projectId, page = {}) => {
  const url = "/api/issues.json";
  return dispatch =>
    axios.get(url, { params: { project_id: projectId, ...page } });
};
