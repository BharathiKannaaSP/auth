import React from "react";
import { Button } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { AuthState } from "../Context";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    height: "100%",
    width: 200,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  profile: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    height: "92%",
  },
  logout: {
    height: "8%",
    width: "100%",
    backgroundColor: "#EEBC1D",
    marginTop: 20,
  },
  picture: {
    width: 200,
    height: 200,
    cursor: "pointer",
    backgroundColor: "#EEBC1D",
    objectFit: "contain",
  },
});

export default function Sidebar() {
  const { setAlert } = AuthState();
  const classes = useStyles();
  const { user } = AuthState();
  const [state, setState] = React.useState({
    // top: false,
    //  left: false,
    // bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const logout = () => {
    signOut(auth);
    setAlert({
      open: true,
      message: "You have been logged out",
      severity: "success",
    });
    toggleDrawer();
  };
  return (
    <div>
      {["right" /*"left", "top", "bottom"*/].map((anchor) => (
        <React.Fragment key={anchor}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "10px",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <Avatar
              onClick={toggleDrawer(anchor, true)}
              style={{
                height: 40,
                width: 40,
                cursor: "pointer",
                backgroundColor: "#EEBC1D",
                display: "flex",
                justifyContent: "center",
                aignItems: "flex-end",
              }}
              src={user.photoURL}
              alt={user.displayName || user.email}
            />
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className={classes.container}>
              <div className={classes.profile}>
                <Avatar
                  className={classes.picture}
                  src={user.photoURL}
                  alt={user.displayName || user.email}
                />
                <span
                  style={{
                    width: "100%",
                    fontSize: 25,
                    textAlign: "center",
                    fontWeight: "bolder",
                    wordWrap: "break-word",
                  }}
                >
                  {user.displayName || user.email}
                </span>
              </div>
              <Button
                variant="contained"
                className={classes.logout}
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
