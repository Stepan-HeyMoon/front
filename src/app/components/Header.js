import { AppBar, Toolbar, Typography, Button, Stack, Icon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center', sm: 'flex-start' }} justifyContent="space-between" sx={{ width: '100%' }}>
                    <Stack direction="row" alignItems="center">
                        <Icon component={SearchIcon} sx={{ mr: { xs: '0', sm: '10px' }, mb: { xs: '10px', sm: '0' }, display: { xs: 'none', sm: 'flex' } }} />
                        <Typography variant="h6">
                            Поиск данных в облачных хранилищах
                        </Typography>
                    </Stack>
                    <Button color="inherit" sx={{ fontSize: '1.2rem', mt: { xs: '10px', sm: '0' } }}>
                        Login
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;













