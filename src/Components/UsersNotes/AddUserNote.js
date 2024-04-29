import { useZustandStore } from "@/Store/useZustandStore";
import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";

// add notes form layout
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

export default function AddUserNote({ openModal, setOpenModal }) {
  const { addNotes } = useZustandStore();
  const [loading, setLoading] = useState(false);

  // modal show
  const showModal = () => {
    setOpenModal(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenModal(false);
    }, 3000);
  };
  // modal close
  const handleCancel = () => {
    setOpenModal(false);
  };

  // form control
  const onFinish = (values) => {
    addNotes(values);
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal
        open={openModal}
        title="Add Your Notes"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        {/* on submit */}
        <Form
          name="validate_other"
          {...formItemLayout}
          variant="filled"
          style={{
            maxWidth: 600,
          }}
          className="mx-auto px-3 pt-3"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[
              {
                required: true,
                message: "Please Location!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Note"
            name="note"
            rules={[
              {
                required: true,
                message: "Please note!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
