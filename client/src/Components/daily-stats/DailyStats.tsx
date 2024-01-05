import { Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "Monday", Active_Tickets: 13 },
  { name: "Tuesday", Active_Tickets: 3 },
  { name: "Wednesday", Active_Tickets: 5 },
  { name: "Thursday", Active_Tickets: 8 },
  { name: "Friday", Active_Tickets: 11 },
  { name: "Saturday", Active_Tickets: 0 },
  { name: "Sunday", Active_Tickets: 0 },
];

const DailyStats = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Tickets
        </Typography>
        <BarChart width={700} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Active_Tickets" fill="#8884d8" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default DailyStats;
