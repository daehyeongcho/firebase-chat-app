/** 왜 클래스형 컴포넌트를 사용했는가?
 * 이유는 모르겠지만 함수형 컴포넌트를 사용했을 때
 * 실시간으로 데이터베이스에서 조회할 때
 * setState가 바로 안먹히는 경우가 발생
 */

import React, { Component } from "react";
import Message from "./Message";
import MessageForm from "./MessageForm";
import MessageHeader from "./MessageHeader";

export default class MainPanel extends Component {
  render() {
    return (
      <div style={{ padding: "2rem 2rem 0 2rem" }}>
        <MessageHeader />
        <div
          style={{
            width: "100%",
            height: "450px",
            border: ".2rem solid #ececec",
          }}
        >
          <Message />
        </div>
        <MessageForm />
      </div>
    );
  }
}
