import * as React from 'react';
import { Field, Input, FluentProvider, makeStyles, teamsLightTheme } from "@fluentui/react-components";
import { useState } from 'react';

export interface IFieldControlProps {
  Text?: string;
  Type: "text" | "number" | "password";
  onValueChange: (newValue: string) => void
}

export interface ITextInputState {
  value: string;
}

export class FieldControlApp extends React.Component<IFieldControlProps, ITextInputState> {
  constructor(props: IFieldControlProps) {
    super(props);
    this.state = {
      value: props.Text || "" 
    }
  }
  public render(): React.ReactNode {
    return (
      <FluentProvider theme={teamsLightTheme} >
      <Field
        label={this.props.Text}
      >
        <Input value={this.state.value.trim() !== "" ? this.state.value : ""} 
        onChange={this.handleInputChange}
        type={this.props.Type === "text" ? "text" : "number"}/>
      </Field>
    </FluentProvider>
    )
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    console.log("handleInputChange: newValue: " + JSON.stringify(newValue));

    this.setState({
      value: newValue
    });

    this.props.onValueChange(newValue);
  }
}
