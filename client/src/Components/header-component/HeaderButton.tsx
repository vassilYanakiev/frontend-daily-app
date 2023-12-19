import Button from "@mui/material/Button";

const headerButton = (props: { text: string }) => {
  return (
    <Button sx={{ border: "1px solid white", color: "white", margin: "8px" }}>
      {props.text}
    </Button>
  );
};

export default headerButton;
