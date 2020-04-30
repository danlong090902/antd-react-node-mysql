import React from 'react';
import { connect } from 'umi';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import styles from './index.less'


const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment author={props.user_name} content={props.user_message} datetime={props.time} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

const CommentPage = ({ dispatch, comment }) => {
  const handleSubmit = () => {
    const { id, userName } = JSON.parse(sessionStorage.getItem('userInfo')) || {};
    const { value } = comment;
    dispatch({
      type: 'comment/sendMessage',
      payload: {
        userid: id,
        username: userName,
        message: value
      }
    })
  };

  const handleChange = (e: any) => {
    dispatch({
      type: 'comment/save',
      payload: {
        value: e.target.value
      }
    })
  };

  const { comments, submitting, value } = comment;
  return (
    <div className={styles.normal}>
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <Editor
            onChange={(e: any) => handleChange(e)}
            onSubmit={() => handleSubmit()}
            submitting={submitting}
            value={value}
          />
        }
      />
    </div>
  );
};

export default connect(({ comment }) => ({
  comment,
}))(CommentPage);