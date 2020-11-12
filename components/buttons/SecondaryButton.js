import BaseButton from "./BaseButton";

const SecondaryButton = ({ onClick, children, ...rest }) => {
  return (
    <BaseButton
      onClick={onClick}
      backgroundColor="white"
      border="1px"
      borderColor="gray.300"
      {...rest}
    >
      {children}
    </BaseButton>
  );
};

export default SecondaryButton;
