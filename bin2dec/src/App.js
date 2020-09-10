import React, { Component } from "react";
import { Input, Button, Typography, Form } from "antd";
import "./App.css";

const { Title } = Typography;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 7 },
};

class App extends Component {
  state = {
    decimal: "",
  };

  formRef = React.createRef();

  convertBinToDec = (values) => {
    let binaryNumberString = values.bin;
    let decimal = Number.parseInt(binaryNumberString, 2);
    this.formRef.current.setFieldsValue({ dec: decimal });
  };

  render() {
    return (
      <div className="App">
        <Form
          {...layout}
          ref={this.formRef}
          className="form-wrapper"
          name="bin2dec"
          onFinish={this.convertBinToDec}
          requiredMark={false}
        >
          <Title level={2}>Bin2Dec</Title>
          <Form.Item
            label="Bin"
            name="bin"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please, enter binary number",
              },
              ({}) => ({
                validator(rule, value) {
                  if (value.match(/^[0-1]+$/g) === null) {
                    return Promise.reject("Only 0 and 1 digit");
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input placeholder="binary number" />
          </Form.Item>
          <Form.Item label="Dec" name="dec">
            <Input placeholder="decimal number" readOnly={true} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              convert
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default App;
