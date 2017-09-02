import React from "react";
import IconButton from "material-ui/IconButton";
import NavigationExpandMore from "material-ui/svg-icons/navigation/expand-more";
import NavigationExpandLess from "material-ui/svg-icons/navigation/expand-less";
const styles = {
  title: {
    cursor: "pointer",
    display: "flex"
  }
};
const ProjectTitle = ({ project, open }) =>
  <span style={styles.title}>
    <span>
      {project ? project.name : "Sélectionner un projet"}
    </span>
    <IconButton>
      {!open ? <NavigationExpandMore /> : <NavigationExpandLess />}
    </IconButton>
  </span>;

export default ProjectTitle;
