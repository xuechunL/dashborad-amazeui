import React from 'react';
import {
  Container,
  Input,
  FormGroup,
  ButtonToolbar,
} from 'amazeui-react';

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <Container className="am-padding-vertical-lg">
        <h2>Dashboard</h2>

        <hr />
        <form className="am-form" target="_blank">
          <Input type="text" label="User Name" id="doc-ipt-1" placeholder="Enter Username" />
          <Input type="password" label="Password" id="doc-ipt-2" placeholder="Enter Password" />
          <Input type="file" label="Upload" id="doc-ipt-3" help="Select One" />
          <Input type="checkbox" label="选我选我选我" defaultChecked readOnly />
          <Input type="radio" name="doc-radio-1" label="单选框 - 选项 1" />
          <Input type="radio" name="doc-radio-1" label="单选框 - 选项 2" />

          {/* inline checkbox  */}
          <FormGroup>
            <label>多选：</label>
            <Input type="checkbox" name="doc-checkbox-1" label="选我" inline />
            <Input type="checkbox" name="doc-checkbox-1" label="也可以选我" inline />
            <Input type="checkbox" name="doc-checkbox-1" label="还可以选我" inline />
          </FormGroup>

          <FormGroup>
            <label>单选：</label>
            <Input type="radio" name="doc-radio-2" label="只能选我" inline />
            <Input type="radio" name="doc-radio-2" label="或者选我" inline />
            <Input type="radio" name="doc-radio-2" label="再或者我" inline />
          </FormGroup>

          <Input type="select" label="单选框">
            <option value="v1">选项 1</option>
            <option value="v2">选项 2</option>
            <option value="v3">选项 3</option>
            <option value="v4">选项 4</option>
          </Input>
          <Input type="select" label="多选框" multiple>
            <option value="v1">选项 - 1</option>
            <option value="v2">选项 - 2</option>
            <option value="v3">选项 - 3</option>
            <option value="v4">选项 - 4</option>
          </Input>
          <Input type="textarea" label="文本域" placeholder="说点神马..." />

          {/* 输入框形状 */}
          <Input label="圆角输入框" radius />
          <Input label="椭圆输入框" round />

          {/* 禁用状态 */}
          <Input label="禁止使用" placeholder="说点神马..." disabled />
          <Input type="textarea" label="禁止使用" placeholder="说点神马..." disabled />
          <ButtonToolbar>
            <Input type="submit" value="提交" standalone />
            <Input type="reset" value="重置" amStyle="danger" standalone />
          </ButtonToolbar>
        </form>
      </Container>
    );
  }
}
