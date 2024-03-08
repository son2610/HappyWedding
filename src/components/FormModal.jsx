import React from "react";
import { Button, Select, Input, notification, Form } from "antd";

const FormModal = ({ setIsModalOpen }) => {
    const { Option } = Select;
    const [form] = Form.useForm();

    //
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, mes, des) => {
        api[type]({
            message: mes,
            description: des,
        });
    };

    //
    const onFinish = (values) => {
        console.log("Success:", values);
        form.resetFields();
        setIsModalOpen(false);
        openNotificationWithIcon(
            "success",
            "Cảm ơn bạn đã đến tham dự",
            "Sự có mặt của bạn sẽ là niềm vui đối với vợ chồng tụi mình"
        );
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        form.resetFields();

        openNotificationWithIcon(
            "error",
            "Đã xảy ra lỗi",
            "Bạn vui lòng thực hiện lại nhé ❤"
        );
    };
    return (
        <>
            {contextHolder}
            <Form
                form={form}
                name="Confirm"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Tên của bạn"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Nhập tên của bạn vào đây nhé",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="count"
                    label="Số lượng"
                    rules={[
                        {
                            required: true,
                            message:
                                "Hãy cho tụi mình biết bạn đi mấy người nhé",
                        },
                    ]}
                >
                    <Select placeholder="Bạn đi mấy người vậy nè" allowClear>
                        <Option value="one">1</Option>
                        <Option value="two">2</Option>
                        <Option value="other">Nhiều hơn 2</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="bg-blue-500"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default FormModal;
