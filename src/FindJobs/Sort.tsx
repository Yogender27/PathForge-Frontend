import { useState } from 'react';
import { Box, Button, Combobox, Text, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const groceries = [
  'Relevence',
  'Most Recent',
  'Salart(Low to High)',
  'Salary(High to Low)'
];

const Sort = ()=>{
    const [selectedItem, setSelectedItem] = useState<string | null>("Relevence");
    const combobox = useCombobox({
      onDropdownClose: () => combobox.resetSelectedOption(),
    });
  
    const options = groceries.map((item) => (
      <Combobox.Option   __size='!text-xs' value={item} key={item}>
        {item}
      </Combobox.Option>
    ));
  
    return (
      <>
        <Combobox
          store={combobox}
          width={150}
          position="bottom-start"
          
          withinPortal={false}
          onOptionSubmit={(val) => {
            setSelectedItem(val);
            combobox.closeDropdown();
          }}
        >
          <Combobox.Target>
            
            <div className='border border-bright-sun-400 text-mine-shaft-300 flex items-center p-1.5 rounded-lg'>
                {selectedItem} <IconAdjustments className='text-bright-sun-400' onClick={() => combobox.toggleDropdown()}/>
            </div>
          </Combobox.Target>
  
          <Combobox.Dropdown>
            <Combobox.Options>{options}</Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      </>
    );
  }

export default Sort
