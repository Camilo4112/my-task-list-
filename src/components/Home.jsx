import React, { useState } from "react";
import { Text, VStack, Flex, Box, Image } from "@chakra-ui/react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import LogoCalendar from "../Assets/LogoCalendar.png";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Box p={8}>
      <Flex justify="center" align="center" h="100vh">
        <Flex direction="column" align="center" justify="center" w="50%">
          <Text fontSize="2xl" mb={4} mt={20}>
            ¡Bienvenido a "Remind Me to Do"!
          </Text>
          <Text fontSize="lg">
            ¡Estamos emocionados de tenerte aquí! Nuestra misión es ayudarte a organizar y gestionar tus tareas de manera eficiente, para que puedas enfocarte en lo que realmente importa.
          </Text>
          <Image src={LogoCalendar} alt="Logo Calendar" w="300px" h="auto" mt={8} />
        </Flex>

        <Flex direction="column" align="center" justify="center" w="50%">
          <VStack spacing={4} p={8} borderWidth={1} borderRadius="lg">
            {isLogin ? (
              <LoginForm />
            ) : (
              <RegisterForm />
            )}
            <Text>
              {isLogin ? (
                <>
                  ¿No tienes una cuenta?{" "}
                  <span style={{ color: "blue", cursor: "pointer" }} onClick={handleToggleForm}>
                    Regístrate
                  </span>
                </>
              ) : (
                <>
                  ¿Ya tienes una cuenta?{" "}
                  <span style={{ color: "blue", cursor: "pointer" }} onClick={handleToggleForm}>
                    Inicia sesión
                  </span>
                </>
              )}
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
