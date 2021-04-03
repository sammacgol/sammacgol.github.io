import React from "react"

import Layout from "../components/layout"
import RoomInfomation03 from "../components/room-information03"
import Slider from "../components/slider"
import SEO from "../components/seo"

const RoomInfomationPage = () => (
  <Layout>
    <SEO title="객실정보" />
    <RoomInfomation03 />
    <Slider />
    <div style={{padding: `4.25rem 0 0 0`}}>
      <h5>303호(온돌)</h5>
      <li>24평</li>
      <li>거실1, 방2(침대3), 화장실2, 주방1</li>
      <li>(기준인원에 1인 추가시 1만원씩 추가)</li>
      <li>주중 25만원 / 금요 특가 30만원</li>
      <li>/ 주말 및 연휴기간 33만원</li>
    </div>
  </Layout>
)

export default RoomInfomationPage
