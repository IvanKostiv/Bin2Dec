import React, { Component } from "react";
import { Input, Button, Typography, Form } from "antd";
import "./App.css";

const { Title } = Typography;

class App extends Component {
  formRef = React.createRef();

  convertBinToDec = (values) => {
    this.formRef.current.setFieldsValue({
      dec: Number.parseInt(values.bin, 2),
    });
  };

  render() {
    return (
      <div className="App">
        <Form
          ref={this.formRef}
          className="form-wrapper"
          name="bin2dec"
          layout="vertical"
          onFinish={this.convertBinToDec}
          requiredMark={false}
        >
          <Title level={2}>Bin2Dec</Title>
          <Form.Item
            label="Binary:"
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
          <Form.Item label="Decimal:" name="dec">
            <Input placeholder="decimal number" readOnly={true} />
          </Form.Item>

          <Form.Item>
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
