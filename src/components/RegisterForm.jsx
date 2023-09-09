import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  VStack,
  Text
} from "@chakra-ui/react";

const RegisterForm = () => {
  return (
    <VStack spacing={4} w="300px">
      <Text fontSize="lg" textAlign="center">
        ¡Únete a nosotros y comienza a hacer cosas increíbles hoy mismo!
      </Text>
      <FormControl id="firstName">
        <FormLabel>Nombres</FormLabel>
        <Input type="text" size="md" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Apellidos</FormLabel>
        <Input type="text" size="md" />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Correo Electrónico</FormLabel>
        <Input type="email" size="md" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Contraseña</FormLabel>
        <Input type="password" size="md" />
      </FormControl>
      <FormControl id="confirmPassword">
        <FormLabel>Confirmar Contraseña</FormLabel>
        <Input type="password" size="md" />
      </FormControl>
      <Checkbox colorScheme="blue">Aceptar términos y condiciones</Checkbox>
      <Button colorScheme="blue" size="md" width="50%">
        Registrarse
      </Button>
    </VStack>
  );
};

export default RegisterForm;
