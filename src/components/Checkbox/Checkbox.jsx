import React, { useState } from 'react';

import { HiMoon } from 'react-icons/hi';
import { TbSun } from 'react-icons/tb';
import { CheckboxView, Input, Label } from './Checkbox.styled';

function Checkbox({ toggleTheme }) {
  const [dark, setDark] = useState(false);

  const handleChange = evt => {
    const { checked } = evt.target;
    setDark(checked);
    toggleTheme();
  };

  return (
    <Label>
      <Input type="checkbox" checked={dark} onChange={handleChange} />
      <CheckboxView />
      <TbSun />
      <HiMoon />
    </Label>
  );
}

export default Checkbox;
