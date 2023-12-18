import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface TeamMemberCardComponentProps {
  teamMember: {
    name: string;
    role: string;
  };
}

const TeamMemberCardComponent = (props: TeamMemberCardComponentProps) => {
  //   const classes = useStyles();

  return (
    <Card /*className={classes.root}*/>
      <CardMedia
        // className={classes.media}
        title={props.teamMember.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.teamMember.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.teamMember.role}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Active ticket</Button>
      </CardActions>
    </Card>
  );
};

export default TeamMemberCardComponent;
