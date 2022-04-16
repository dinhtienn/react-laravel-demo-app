import React from 'react';
import axios from 'axios'
import {Form, Input, Button} from 'antd';

const {TextArea} = Input;

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 12 },
};

const validateMessages = {
    required: 'Vui lòng nhập ${label}!',
};

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const {match} = this.props;

        axios.get(`/api/posts/${match.params.id}`).then(response => {
            console.log(response);
            this.setState({
                data: response.data
            })
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const {form, history, match} = this.props;

        form.validateFields((err, values) => {
            if (!err) {
                axios.post(`/api/posts/${match.params.id}`, values)
                    .then(response => {
                        alert('thanh cong');
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
        // const {data} = this.state;

        return (
            <Form labelCol={...layout} onSubmit={this.handleSubmit} validateMessages={validateMessages}>
                <Form.Item name="title" label="Tên bài viết" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="content" label="Nội dung" rules={[{ required: true }]}>
                    <TextArea rows={6} />
                </Form.Item>
                <Form.Item wrapperCol={{span: 12, offset: 5}}>
                    <Button type="primary" htmlType="submit">
                        Sửa
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Edit;
