/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas } from "@/components/Canvas";
import { Typography } from "@/components/Typography";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { AuthContext } from "src/store/store";
import Cookies from "universal-cookie";

function CreateDB() {
  const cookie = new Cookies();
  const nav: NavigateFunction = useNavigate();
  const { _signIn, isAuth, mode } = React.useContext<any>(AuthContext);
  const handleConfirm = () => {
    cookie.set("@token", "offline-mode-mamamia", { path: "/" });
    cookie.set("@mode", "local", { path: "/" });
    _signIn({
      mode: "local",
      keyToken: "offline-mode-mamamia",
    });
    nav("/local/dashboard");
  };
  React.useEffect(() => {
    if (isAuth) {
      if (mode === "local") return nav("/local/dashboard");
      nav("/");
    }
  }, [isAuth]);
  return (
    <Canvas
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        width={[
          "90%", // 0-30em
          "90%", // 30em-48em
          "80%", // 48em-62em
          "80%", // 62em+
        ]}
        sx={{
          bg: "#fff",
          borderRadius: styledPropTheme.borderRadius,
        }}
      >
        <Box
          sx={{
            px: 8,
            py: 3,
            borderBottomWidth: "1px",
            borderBottomColor: "gray.300",
            borderBottomStyle: "solid",
          }}
        >
          <Typography
            variantText="xl"
            sx={{ fontWeight: 700, color: "gray.700" }}
          >
            Create Local DataBase
          </Typography>
        </Box>
        <Box
          sx={{
            px: 8,
            py: 3,
            color: "gray.600",
          }}
        >
          <Typography variantText="sm">
            We will use your browser's local storage to store the database. We
            will encrypt the data that you have created using crypto-js
            technology{" "}
            <a
              style={{ color: "blue", cursor: "pointer" }}
              href="https://github.com/brix/crypto-js"
            >
              (https://github.com/brix/crypto-js)
            </a>
            . We hereby hope that even though your data is on a local computer,
            we will still protect your data. We hereby provide some important
            information that you should know :
          </Typography>
          <ul
            style={{
              marginLeft: "50px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <li>
              <Typography sx={{ fontWeight: 700 }} variantText="sm">
                We are not responsible for any loss, inaccuracy, error and any
                form of data corruption arising from/by your or this
                application's error
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontWeight: 700 }} variantText="sm">
                Your data will be deleted if you clear your browser data
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontWeight: 700 }} variantText="sm">
                You still need an internet connection to be able to use this
                application even if you are using the local feature
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontWeight: 700 }} variantText="sm">
                This local feature is also still in the development stage, there
                is a possibility that this application will crash in some
                conditions
              </Typography>
            </li>
          </ul>
          <Typography variantText="sm">
            By reading and clicking the confirmation button, it means you agree
            with this statement.
          </Typography>
        </Box>
        <Flex
          sx={{
            gap: 3,
            justifyContent: "flex-end",
            px: 8,
            py: 3,
            borderTopWidth: "1px",
            borderTopColor: "gray.300",
            borderTopStyle: "solid",
          }}
        >
          <Button
            onClick={() => nav(-1)}
            size="sm"
            variant="outline"
            colorScheme="error.main"
          >
            Cancel
          </Button>
          <Button onClick={handleConfirm} size="sm">
            Confirm
          </Button>
        </Flex>
      </Container>
    </Canvas>
  );
}

export default CreateDB;
