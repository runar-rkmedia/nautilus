import React /*{ JSXElementConstructor }*/ from 'react';
import {
  // Options,
  Networks,
  // UpdateOption,
  UpdateView,
  SelectNetwork,
} from '../App.d';

type Props = {
  view: string;
  // options: Options;
  networks: Networks;
  updateView: UpdateView;
  // updateOption: UpdateOption;
  selectNetwork: SelectNetwork;
};

const NetworksDropDown: React.FC<Props> = ({
  view,
  // options,
  networks,
  updateView,
  // updateOption,
  selectNetwork,
}) => {
  const networksOptions = Object.keys(networks).map(network => {
    return (
      <option key={`networks option: ${network}`} id={network} value={network}>
        {network}
      </option>
    );
  });

  const renderDropdown = () => {
    return (
      <>
        <select id="networks" name="networks" onChange={selectNetwork}>
          <option
            key={`networks option header`}
            id={'networkHeader'}
            value={''}
          >
            {`networks`}
          </option>
          {networksOptions}
        </select>
      </>
    );
  };

  return renderDropdown();
};

export default NetworksDropDown;
