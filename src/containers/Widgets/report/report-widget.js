import Operation from 'antd/lib/transfer/operation';
import React, { Component } from 'react';
import { ReportWidgetWrapper } from './style';
import { Icon, Row, Col } from 'antd';
import Dropdown, {
  DropdownButtons,
  DropdownMenu,
  MenuItem,
  SubMenu
} from '../../../components/uielements/dropdown';
import IntlMessages from '../../../components/utility/intlMessages';
export default class ReportsWidget extends Component {

 
  render() {
    const { label, details, children } = this.props;
    const menuHover = (
      <DropdownMenu>
        <MenuItem>
          <a target="_blank" rel="noopener noreferrer">
            Emergency
          </a>
        </MenuItem>
        <MenuItem>
          <a target="_blank" rel="noopener noreferrer">
            Steel
          </a>
        </MenuItem>
        <MenuItem>
          <a target="_blank" rel="noopener noreferrer">
            Plastic
          </a>
        </MenuItem>
      </DropdownMenu>
    );
    return (
      <ReportWidgetWrapper className="isoReportsWidget">
        <h3 className="isoWidgetLabel">
          <Dropdown overlay={menuHover}>
            <a className="ant-dropdown-link">
              {<IntlMessages id="uiElements.dropdown.hoverMe" />}{' '}
              <Icon type="down" />
            </a>
          </Dropdown>
        </h3>

        <div className="isoReportsWidgetBar">
          {children}
        </div>

        {/* <p className="isoDescription">
          {details}
        </p> */}
      </ReportWidgetWrapper>
    );
  }
}
