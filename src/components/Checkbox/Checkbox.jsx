import React, { useState } from 'react';

import { HiMoon } from 'react-icons/hi';
import { TbSun } from 'react-icons/tb';
import { CheckboxView, Input, Label } from './Checkbox.styled';

function Checkbox({ toggleTheme }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const handleChange = evt => {
    const { checked } = evt.target;
    setDarkTheme(checked);
    toggleTheme();
  };

  return (
    <Label>
      <Input type="checkbox" checked={darkTheme} onChange={handleChange} />
      <CheckboxView />
      <TbSun />
      <HiMoon />
    </Label>
  );
}

export default Checkbox;
