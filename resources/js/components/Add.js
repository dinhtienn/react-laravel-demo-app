import React from 'react';
import axios from 'axios'
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 12 },
};

const validateMessages = {
    required: 'Vui lòng nhập ${label}!',
};

class Add extends React.Component {
    constructor(props) {
        super(props);
        this
    }

    handleSubmit = e => {
        e.preventDefault();
        const {form, history} = this.props;

        form.validateFields((err, values) => {
            if (!err) {
                axios.post('/api/posts', values)
                    .then(response => {
                        history.push('/')
                    })
                    .catch(error => {
                       console.log(error);
                    })
            }
        });
    };

    render() {
        // const {form} = this.props;
        // const {getFieldDecorator} = form;

        return (
            <Form {...layout} onSubmit={this.handleSubmit} validateMessages={validateMessages}>
                <Form.Item name="title" label="Tên bài viết" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="content" label="Nội dung" rules={[{ required: true }]}>
                    <TextArea rows={6} />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button type="primary" htmlType="submit">
                        Thêm
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Add;
