import React from "react"
import { Container, Table} from "react-bootstrap";


const Guide = () => {
    return (
      <Container fluid>
          <p>
            <h5>이용안내</h5>
            <li>입실시간은 15시부터이며, 퇴실시간은 마지막 날 11시입니다.</li>
            <li>퇴실 시 쓰레기는 분리수거 해주시고 사용한 식기류의 설거지도 부탁드립니다.</li>
            <li>객실 정리가 끝나시면 펜션지기에게 연락하시어 퇴실 점검을 받아주십시오.</li>
            <li>다음 이용객을 위하여 퇴실시간을 준수해 주시기 바랍니다. </li>
          </p>
          <Table bordered size="sm" className="text-center">
            <thead>
              <tr>
                <th>{ }</th>
                <th className="align-middle">평수</th>
                <th className="align-middle">기준 인원</th>
                <th className="align-middle">최대 인원</th>
                <th className="align-middle">주중 가격 (일~목)</th>
                <th className="align-middle">금요 특가</th>
                <th><div style={{padding: `1.25rem 1.0875rem`}}>주말 가격 (토/연휴/성수기)</div></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div style={{padding: `1.25rem 1.0875rem`}}>2층 독재</div></td>
                <td className="align-middle">45평</td>
                <td className="align-middle">4인</td>
                <td className="align-middle">12인</td>
                <td className="align-middle">25만원</td>
                <td className="align-middle">30만원</td>
                <td className="align-middle">33만원</td>
              </tr>
              <tr>
                <td className="align-middle"><div style={{padding: `1.25rem 1.0875rem`}}>301호/305호(침대)</div></td>
                <td className="align-middle">45평</td>
                <td className="align-middle">4인</td>
                <td className="align-middle">12인</td>
                <td className="align-middle">25만원</td>
                <td className="align-middle">30만원</td>
                <td className="align-middle">33만원</td>
              </tr>
              <tr>
                <td className="align-middle"><div style={{padding: `1.25rem 1.0875rem`}}>303호(온돌)</div></td>
                <td className="align-middle">45평</td>
                <td className="align-middle">4인</td>
                <td className="align-middle">12인</td>
                <td className="align-middle">25만원</td>
                <td className="align-middle">30만원</td>
                <td className="align-middle">33만원</td>
              </tr>
              <tr>
                <td className="align-middle"><div style={{padding: `1.25rem 1.0875rem`}}>304호(알파룸)</div></td>
                <td className="align-middle">45평</td>
                <td className="align-middle">4인</td>
                <td className="align-middle">12인</td>
                <td className="align-middle">25만원</td>
                <td className="align-middle">30만원</td>
                <td className="align-middle">33만원</td>
              </tr>
              <tr>
                <td className="align-middle"><div style={{padding: `1.25rem 1.0875rem`}}>302호(린넨실)</div></td>
                <td className="align-middle">45평</td>
                <td className="align-middle">4인</td>
                <td className="align-middle">12인</td>
                <td className="align-middle">25만원</td>
                <td className="align-middle">30만원</td>
                <td className="align-middle">33만원</td>
              </tr>
            </tbody>
          </Table>
          <div style={{padding: `4.25rem 0 0 0`}}>
            <h5>이용 요금</h5>
            <br />
            <p>※ 카드 결제시 부가세 별도</p>
            <p>※ 업체 채널(예 : 네이버 예약 등)을 통하여 예약 시 추가 금액이 발생될 수 있습니다.</p>
            <br />
            <p>※ 기준인원에1인 추가시(36개월 이상) 1만원의 추가요금이 발생됩니다. (단, 36개월 미만 제외-침구류 미제공)​</p>
            <br />
            <p>※ 바비큐 준비(숯+그릴+석쇠+테이블) 비용은 4인 기준 2만원 입니다.</p>
            <p>바비큐장은 비나 눈이와도 이용가능합니다.</p>
            <br />
            <p> ※ 도예체험은 사전예약을 해주셔야 하며 체험 후 완성품을 댁으로 보내드립니다. 비용은 1인당 3만원이며 택배비는 배송지별 착불 또는 선불 5천원입니다. 최소 4인 이상부터 진행이 가능합니다.</p>
            <br />
            <p>※ 예약시 취침인원이 아닌 펜션 이용인원을 꼭 말씀해 주셔야 합니다. 예약인원과 다른 추가인원 이용시 퇴실조치 사유가 됩니다.</p>
            <br />
            <h4>※ 계좌번호 : 농협 352-0756-5533-23 (김종필) </h4>
            <br />
            <li>예약 신청 후 12시간 이내 입금 미확인시 예약이 취소될 수도 있습니다.</li>
            <li>2입금은 100% 입금확인시 예약 확정입니다.</li>
            <li>입금은 가능한 예약자와 동일한 이름으로 해주시며, 부득이하게 다른 이름으로 입금시 꼭 연락주시어 확인 부탁드립니다.</li>
            <li>예약인원이 추가되었을 경우 미리 말씀해 주셔야하며 최대인원 초과시 입실이 제한될 수 있습니다.</li>
          </div>
          <div style={{padding: `4.25rem 0 0 0`}}>
            <h5>환불 규정</h5>
            <p>올바른 예약 문화를 위하여 환불규정을 정하오니 꼭 확인하시고 예약 부탁드립니다.</p>
          </div>
          <Table bordered size="sm" className="text-center">
            <thead>
              <tr>
                <th className="align-middle">7일전 취소</th>
                <th className="align-middle">6~4일전 취소</th>
                <th className="align-middle">3~2일전 취소</th>
                <th><div style={{padding: `1.25rem 1.0875rem`}}>1일전~당일 취소</div></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div style={{padding: `1.25rem 1.0875rem`}}>80%환불</div></td>
                <td className="align-middle">50%환불</td>
                <td className="align-middle">20%환불</td>
                <td className="align-middle">환불불가</td>
              </tr>
            </tbody>
          </Table>
          <div style={{padding: `4.25rem 0 0 0`}}>
            <h5>준수 사항</h5>
            <li>객실 및 화장실 등 건물 내부에서는 절대 금연이며 화재 위험에 주의해주십시오. 외부에서 흡연시 꽁초는 지정된 재떨이에 버려주세요.</li>
            <li>애완동물은 부득이 타객실 및 손님을 위해 입실을 금하오니 양해 부탁드립니다.</li>
            <li>무분별한 오락 및 음주, 고성방가로 다른 이용객분들께 불편함을 주지 않도록 부탁드립니다. 특히 3층은 복도형으로 타인에게 피해가 가는 행동을 절대 금합니다.</li>
            <li>펜션 이용 고객님의 부주의로 화재나 기타 파손 및 분실 등 피해가 발생하였을 때는 예약자분께서 손해배상 하셔야 합니다.</li>
            <li>기타 펜션의 시설물 및 물품 사용시 임의로 사용하시지 마시고 꼭 펜션지기에게 말씀해 주시고 이용해 주시기 바랍니다.</li>
          </div>
      </Container>
    );
}

export default Guide