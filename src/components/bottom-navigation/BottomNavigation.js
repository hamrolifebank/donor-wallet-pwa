import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
// import { QrReader } from "react-qr-reader";

import { BOTTOM_NAVIGATION_OPTIONS } from "@routes/paths";
import Iconify from "@components/iconify";
import { useTheme } from "@emotion/react";
import { Container } from "@mui/system";

const BottomNavigationBar = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState("No data found");

  const router = useRouter();
  const theme = useTheme();
  const handleQR = (icon) => {
    return (
      <>
        {/* <QrReader
          delay={100}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "100%" }}
        /> */}
        <p>{data}</p>
      </>
    );
    return icon;
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={4}
    >
      <BottomNavigation
        sx={{ backgroundColor: theme.palette.grey[200] }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          router.push(newValue);
        }}
      >
        {BOTTOM_NAVIGATION_OPTIONS.map((option, index) => (
          <BottomNavigationAction
            icon={
              option.icon ? (
                <Iconify
                  sx={{ transform: "scale(1.2)", mb: 0.05 }}
                  {...option?.iconStyle}
                  icon={
                    // option.icon === "fluent:qr-code-24-filled"
                    //   ? handleQR(option.icon)
                    //   :
                    option.icon
                  }
                />
              ) : (
                ""
              )
            }
            key={index}
            label={
              <Typography sx={{ typography: "body1" }}>
                {option.label}
              </Typography>
            }
            value={option.path}
            sx={option?.sx}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationBar;
