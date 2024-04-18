import { sayHelloProps } from "./types";

export function sayHello(props: sayHelloProps) {
  const { firstName, lastName, age } = props;

  console.log(
    `Hello ${firstName} ${lastName ? lastName : ""} ${age ? age : ""}`
  );
}
