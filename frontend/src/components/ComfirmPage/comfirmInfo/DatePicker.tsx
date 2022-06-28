import * as React from "react";
import addWeeks from "date-fns/addWeeks";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";

interface DatePickerProps {
  getValue: (day: any) => void;
}

function getWeeksAfter(date: Date | null, amount: number) {
  return date ? addWeeks(date, amount) : undefined;
}
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
  components: {
    MuiInputLabel:{
      styleOverrides:{
        root: {
          color:"white"
        }
      }
    },  
}
});
export default function MinMaxDateRangePicker(props: DatePickerProps) {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  
  React.useEffect(() => {
    props.getValue(value);
  },[props, value]);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <DateRangePicker       
          disablePast
          value={value}
          maxDate={getWeeksAfter(value[0], 1)}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} color="secondary" />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} color="secondary" />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
