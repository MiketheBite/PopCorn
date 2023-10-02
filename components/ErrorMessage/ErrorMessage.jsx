import { ErrorText } from "./ErrorMessage.styled";

export default function ErrorMessage({ message }) {
  return (
    <ErrorText>
      <span>⛔️</span>
      {message}
    </ErrorText>
  );
}
