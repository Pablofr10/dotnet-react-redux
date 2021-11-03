import { AppBar, Switch, Toolbar, Typography } from "@material-ui/core";

interface Props {
  changeDarkMode: () => void;
}

export default function Header({ changeDarkMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch onChange={changeDarkMode} color="default" />
      </Toolbar>
    </AppBar>
  );
}
