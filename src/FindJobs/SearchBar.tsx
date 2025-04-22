import React, { useState } from 'react'
import MultiSelector from './InputSelector'
import { dropdownData } from '../Data/Data'
import { Divider, RangeSlider } from '@mantine/core'

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([0, 1000000]);

  return (
    <div>
      <div className="flex justify-center items-center px-5 py-8">
        {dropdownData.map((item, idx) => (
          <div key={idx} className="w-1/5">
            <MultiSelector
              title={item.title}
              icon={item.icon}
              options={item.options}
            />
            <Divider mr="xs" size="xs" orientation="vertical" />
          </div>
        ))}

        {/* Salary Range Slider */}
        <div className="w-1/5">
          <div className="flex justify-between text-lg font-medium mb-2 text-mine-shaft-200 ">
            <div>Salary</div>
            <div>
              &#8377;{value[0]} - &#8377;{value[1]}
            </div>
          </div>
          <RangeSlider
            color="yellow"
            size="xs"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar
