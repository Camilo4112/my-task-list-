import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  HStack, // Nuevo import para el layout horizontal
} from "@chakra-ui/react";
import LogoPerrito from '../assets/LogoPerrito.png'; // Asegúrate de proporcionar la ruta correcta

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
  };

  return (
    <HStack as="form" spacing={8} align="stretch" width="100%">
      <img src={LogoPerrito} alt="Logo Perrito" width="170px" height="100px" /> {/* Imagen a la izquierda */}
      <VStack spacing={8} align="stretch" width="100%">
        <FormControl>
          <FormLabel>Correo Electrónico</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="teal" size="lg" type="submit" width="100%">
          Iniciar Sesión
        </Button>
      </VStack>
    </HStack>
  );
};

export default LoginForm;


