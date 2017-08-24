import React from "react";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

const AppMenuIcon = ({ logout, baseURL }) =>
  <div>
    <IconMenu
      iconButtonElement={
        <IconButton>
          <MoreVertIcon color="white" />
        </IconButton>
      }
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      targetOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <MenuItem primaryText="Paramètre" />
      <MenuItem primaryText={<a href={baseURL}>Forge</a>} />
      <MenuItem primaryText="Déconnexion" onClick={logout} />
    </IconMenu>
  </div>;

export default AppMenuIcon;
