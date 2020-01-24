import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Tabs, Tab, Button, Table, Dropdown} from 'react-bootstrap';
import Sidebar from "../components/Sidebar";

class Budget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { members } = this.props;
    return(
      <div className="lifemapAppView">
        <Sidebar/>
        <div className="mainPage">
          <div className="topBar">
            <h1 className="pageTitle">収支入力</h1>
          </div>
          <Container>
            <Tabs id="tab-example">
              { members.members.map((member) => 
                <Tab key={member.id.toString()} eventKey={member.id} title={member.member_name}>
                  <div className="income-section">
                    <h2>収入</h2>
                    <div className="income-input-area">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          入力
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">給与収入</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">事業収入</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">その他（定期的）</Dropdown.Item>
                          <Dropdown.Item href="#/action-4">その他（一時金）</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="income-table">
                      <Table responsive size="sm">
                        <thead>
                          <tr>
                            <th>種類</th>
                            <th>開始年齢（歳）</th>
                            <th>終了年齢（歳）</th>
                            <th>年収（万円）</th>
                            <th>変動率（%）</th>
                            <th>内容</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                  <div className="expense-seciton">
                    <h2>支出</h2>
                    <div className="expense-input-area">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          入力
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">固定費</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">住宅費用</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">生活費</Dropdown.Item>
                          <Dropdown.Item href="#/action-4">その他（定期的）</Dropdown.Item>
                          <Dropdown.Item href="#/action-5">その他（一時金）</Dropdown.Item>
                          <Dropdown.Item href="#/action-6">夢資金</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="expense-table">
                      <Table responsive size="sm">
                        <thead>
                          <tr>
                            <th>種類</th>
                            <th>開始年齢（歳）</th>
                            <th>終了年齢（歳）</th>
                            <th>支出（万円）</th>
                            <th>変動率（%）</th>
                            <th>内容</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                        </tbody>
                      </Table>

                    </div>
                  </div>
                </Tab>
              )}
            </Tabs>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members,
})

export default connect(mapStateToProps)(Budget);