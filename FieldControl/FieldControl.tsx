import * as React from 'react';
import { Field, Input, FluentProvider, makeStyles, teamsLightTheme } from "@fluentui/react-components";
import { useState } from 'react';

export interface IFieldControlProps {
  Text?: string;
  Type: "text" | "number" | "password";
  onValueChange: (newValue: string) => void
}

const FieldControlApp = (props: IFieldControlProps): React.JSX.Element => {
  const [value, newValue] = useState(props.Text);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    const newValue = event.target.value
    props.onValueChange(newValue)
  }
  return (
    <FluentProvider theme={teamsLightTheme} >
    <Field
      label={props.Text}
    >
      <Input 
      onChange={handleInputChange}
      type={props.Type}/>
    </Field>
  </FluentProvider>
  )
} 

export default FieldControlApp
