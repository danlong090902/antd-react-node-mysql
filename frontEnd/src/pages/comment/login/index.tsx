import React from 'react';
import { connect } from 'umi';
import { Form, Input, Button, Checkbox, } from 'antd';
import styles from './index.less'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Products = ({ dispatch, products }) => {
  const onFinish = (values: any) => {
    dispatch({
      type: 'login/login',
      payload: values
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.normal}>
      <div className={styles.login}>
        <div className={styles.title}>Login</div>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className={styles.submit}>
              Submit
                </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);