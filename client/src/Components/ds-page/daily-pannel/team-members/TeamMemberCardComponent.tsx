import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface TeamMemberCardComponentProps {
  teamMember: {
    id: string;
    name: string;
    surname: string;
    role: string;
  };
  selected: boolean;
}

const TeamMemberCardComponent = (props: TeamMemberCardComponentProps) => {
  const { selected } = props;
  const { name, surname, id, role } = props.teamMember;

  return (
    <Card>
      <CardMedia title={props.teamMember.name + " " + id} />
      <CardContent
        sx={{
          backgroundColor: "#bdd5e7",
          display: "flex",
          justifyContent: "space-between",
          border: selected ? "2px solid #675e5e" : "1px solid #b2b2cd",
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant={selected ? "h5" : "h6"}
            component="div"
          >
            {`${name} ${surname}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
        </Box>
        <Avatar
          sx={{ backgroundColor: selected ? "#409f99" : "#b2b2cd" }}
        >{`${name[0]}${surname[0]}`}</Avatar>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCardComponent;
