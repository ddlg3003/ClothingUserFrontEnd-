import {
  Box,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetAllOrdersQuery } from "../../services/orderApis";
import {
  PROFILE_QUERY_STRING,
  SIDEBAR_STATE,
} from "../../utils/globalVariables";
import AddressDetails from "./AddressDetails";
import Favorites from "./Favorites";
import Orders from "./Orders";
import PasswordChange from "./PasswordChange";
import ProfileDetails from "./ProfileDetails";
import SideBar from "./SideBar";
import Alert from "../Alert/Alert";
import useStyles from "./styles";

const Profile = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // TOAST 
  const [openToast, setOpenToast] = useState(false);
  const [toastData, setToastData] = useState({
    color: "",
    severity: "",
    message: "",
  });

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenToast(false);
  };

  // Init tab query string for user friendly url
  // Main query tab
  const tabParamInit = SIDEBAR_STATE.includes(
    searchParams.get(PROFILE_QUERY_STRING[0])
  )
    ? searchParams.get(PROFILE_QUERY_STRING[0])
    : SIDEBAR_STATE[0];

  const [tabValue, setTabValue] = useState(false);

  const [userInfo, setUserInfo] = useState({
    fullname: "",
    phone: "",
    gender: "",
  });

  const [orders, setOrders] = useState();

  window.onpopstate = () => {
    if (window.location.href === "http://localhost:3000/profile?tab=orders")
      window.location.href = "/";
  };

  const handleNavSelectionChange = (value) => {
    if (tabValue !== SIDEBAR_STATE[4]) setTabValue(false);

    setSearchParams({ [PROFILE_QUERY_STRING[0]]: value });
  };

  return (
    <>
      <div className={classes.body}>
        <Typography
          letterSpacing="2px"
          fontSize="25px"
          fontWeight="normal"
          align="center"
          paddingBottom="40px"
          paddingTop="60px"
        >
          TRANG CÁ NHÂN
        </Typography>{" "}
        <Container maxWidth="lg">
          <div className={classes.root}>
            <SideBar
              classes={classes}
              handleNavSelectionChange={handleNavSelectionChange}
              userInfo={userInfo}
            />
            <Paper elevation={10}>
              <div className={classes.profileMain}>
                <div hidden={tabParamInit !== SIDEBAR_STATE[0]}>
                  <ProfileDetails
                    classes={classes}
                    toastData={toastData}
                    setToastData={setToastData}
                    openToast={openToast}
                    setOpenToast={setOpenToast}
                    handleCloseToast={handleCloseToast}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                  />
                </div>
                <div hidden={tabParamInit !== SIDEBAR_STATE[1]}>
                  <AddressDetails classes={classes} />
                </div>

                <div hidden={tabParamInit !== SIDEBAR_STATE[2]}>
                  <PasswordChange classes={classes} />
                </div>

                <div hidden={tabParamInit !== SIDEBAR_STATE[3]}>
                  <Favorites classes={classes} />
                </div>
                <div hidden={tabParamInit !== SIDEBAR_STATE[4]}>
                  <Orders
                    tabValue={tabValue}
                    setTabValue={setTabValue}
                    navSelection={tabParamInit}
                    // orders={orders}
                    classes={classes}
                    toastData={toastData}
                    setToastData={setToastData}
                    openToast={openToast}
                    setOpenToast={setOpenToast}
                    handleCloseToast={handleCloseToast}
                  />
                </div>
              </div>
            </Paper>
          </div>
        </Container>
      </div>
      <Alert 
        message={toastData.message}
        openToast={openToast} 
        handleCloseToast={handleCloseToast}
        color={toastData.color}
        severity={toastData.severity}    
      />
    </>
  );
};

export default Profile;
