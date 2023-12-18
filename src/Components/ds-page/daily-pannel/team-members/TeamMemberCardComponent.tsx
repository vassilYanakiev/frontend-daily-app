import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface TeamMemberCardComponentProps {
  teamMember: {
    id: string;
    name: string;
    surname: string;
    role: string;
  };
  selected: string;
}

const TeamMemberCardComponent = (props: TeamMemberCardComponentProps) => {
  //   const classes = useStyles();

  const { name, surname, id, role } = props.teamMember;

  return (
    <Card /*className={classes.root}*/>
      <CardMedia
        // className={classes.media}
        title={props.teamMember.name + " " + id}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${name} ${surname}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Active ticket</Button>
      </CardActions> */}
    </Card>
  );
};

export default TeamMemberCardComponent;
