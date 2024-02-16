/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas } from "@/components/Canvas";
import { Typography } from "@/components/Typography";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { AuthContext } from "src/store/store";

function CreateDB() {
  const nav: NavigateFunction = useNavigate();
  const { _signIn, isAuth, mode } = React.useContext<any>(AuthContext);
  const handleConfirm = () => {
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
            Local mode is a mode where all data will be stored in your browser's
            local storage. We will encrypt the stored data using the crypto-js
            technology package (you can learn more about it here :{" "}
            <a
              style={{ color: "blue", cursor: "pointer" }}
              href="https://github.com/brix/crypto-js"
            >
              https://github.com/brix/crypto-js
            </a>
            ). Why we encrypt your data ? <span>YA TERSERAH SAYA</span>. There
            are several things you need to know regarding this application as
            follows:
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
                We are not responsible for any type of damage, loss of data or
                inaccuracies in the data in this application
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontWeight: 700 }} variantText="sm">
                Please remember that all data will be lost if you delete browser
                data
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontWeight: 700 }} variantText="sm">
                You still need an internet connection to be able to use this
                application even in local mode
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
