// in src/MyMenu.js
import { Menu } from 'react-admin';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TypeIcon from '@mui/icons-material/TypeSpecimen';
import InfoIcon from '@mui/icons-material/InfoTwoTone';
import RoofIcon from '@mui/icons-material/Roofing';
import CategoryIcon from '@mui/icons-material/Category';
import PlaceIcon from '@mui/icons-material/Cabin';
import UseIcon from '@mui/icons-material/Store';

export const AppMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.Item to="/architectonic-adequacies" primaryText="Architectonic Adequacies" leftIcon={<ArchitectureIcon />} />
        <Menu.Item to="/buildings" primaryText="Buildings" leftIcon={<HomeIcon />} />
        <Menu.Item to="/conservation-levels" primaryText="Conservation Levels" leftIcon={<ConstructionIcon />} />
        <Menu.Item to="/current-states" primaryText="Current States" leftIcon={<CheckCircleIcon />} />
        <Menu.Item to="/facade-typologies" primaryText="Facade Typologies" leftIcon={<TypeIcon />} />
        <Menu.Item to="/interventions" primaryText="Interventions" leftIcon={<InfoIcon />} />
        <Menu.Item to="/openings" primaryText="Openings" leftIcon={<MapIcon />} />
        <Menu.Item to="/roof-coverings" primaryText="Roof Coverings" leftIcon={<RoofIcon />} />
        <Menu.Item to="/structural-systems" primaryText="Structural Systems" leftIcon={<CategoryIcon />} />
        <Menu.Item to="/use-types" primaryText="Use Types" leftIcon={<UseIcon />} />
        <Menu.Item to="/wall-coverings" primaryText="Wall Covering" leftIcon={<PlaceIcon />} />
    </Menu>
);