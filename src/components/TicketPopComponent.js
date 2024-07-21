import { Dimensions, Text, View } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import TicketBar from './TicketBar';
import { renderers } from 'react-native-popup-menu';
import ViewTicket from './ViewTicket';
const { ContextMenu } = renderers;
export default TicketPopComponent = ({ item }) => (
  <Menu
    renderer={ContextMenu}
  >
    <MenuOptions
      customStyles={optionsStyles}>
      <MenuOption
        style={{
          minWidth: Dimensions.get('window').width - 32,
          backfaceVisibility: 'hidden',
          backgroundColor: "#00000000"
        }}
      >
        <TicketBar />
      </MenuOption>
    </MenuOptions>
    <MenuTrigger >
      <ViewTicket item={item} />
    </MenuTrigger>
  </Menu>
);

const optionsStyles = {
  optionsContainer: {
    backgroundColor: '#ffffff00',
    backfaceVisibility: 'hidden',
    height: 10,
    marginTop: 120,
  },
  optionsWrapper: {
    backgroundColor: '#ffffff00',
    backfaceVisibility: 'hidden',
    marginLeft: -8,
    height: 10

  },
  optionWrapper: {
    backgroundColor: 'yellow',
  },
  optionTouchable: {
    underlayColor: 'gold',
  },
  optionText: {
    color: 'brown',
  },
};