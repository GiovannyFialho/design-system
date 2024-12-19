import { styled } from "./styles/stitches.config";

const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite500",
  borderRadius: "$md",
});

export function App() {
  return <Button>Hello World</Button>;
}
