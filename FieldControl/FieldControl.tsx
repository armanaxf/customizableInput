import * as React from 'react';
import { Field, Input, FluentProvider, makeStyles, webLightTheme, shorthands } from "@fluentui/react-components";
import { useState } from 'react';
import { wrap } from 'module';

export interface IFieldControlProps {
  Text?: string;
  Type: "text" | "number" | "password";
  Orientation: "horizontal" | "vertical";
  Placeholder?: string;
  onValueChange: (newValue: string) => void;
  Height?: string | undefined;
  Width?: string | undefined;
}

const useStyles = makeStyles({

})

const FieldControlApp = (props: IFieldControlProps): React.JSX.Element => {
  const classes = useStyles();
  const [value, newValue] = useState(props.Text);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    const newValue = event.target.value
    props.onValueChange(newValue)
  }
  return (
    <div style={{
      height: props.Height || "initial",
      width: props.Width || "initial"
    }}>
    <FluentProvider theme={webLightTheme} >
    <Field
      label={props.Text}
      orientation={props.Orientation}
    >
      <Input
      placeholder={props.Placeholder}
      onChange={handleInputChange}
      type={props.Type}/>
    </Field>
  </FluentProvider>
  </div>
  )
} 

export default FieldControlApp
