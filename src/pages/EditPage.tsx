
import { useEffect, useState } from 'react';
import MarkdownPreview from '../components/EditPage/MarkdownPreview'
import ContentManager from '@/components/EditPage/ContentManager';
import AppBar from '@/components/Common/AppBar';
import { getOriginMarkdown, postFinalMarkdown } from '@/api/markdown';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
  const request_dummy_md = `
<h1 align="middle">온정</h1>

<div style="text-align: center;">
    <img src="https://github.com/user-attachments/assets/684513ab-190a-48d9-86f4-e50cccf32e24" alt="solution" width="500">
</div>

<h3 align="middle">선행의 선순환이 시작되는 곳</h3>

<br/>

## 선한 일을 하는 소상공인, 얼마나 알고 계신가요 ? 😮
&nbsp;많은 소상공인들이 다양한 선행 활동을 하고 있음에도 불구하고,
이러한 선행의 지속을 위한 홍보와 지원은 충분하지 않습니다.

&nbsp;따라서, 온정은 지역 소상공인의 선행을 지원하며, 고객이 소비를 통해 선행에
쉽게 동참하고 응원할 수 있도록 합니다. 이를 통해 소상공인의 경제적
부담을 덜고, 지역사회에 선한 영향력의 선순환을 만들어 가고자 합니다.

<br />

<div style="text-align: center;">
    <img src="https://github.com/user-attachments/assets/aee993f3-dc41-46cb-b56b-e0954638d66f" alt="solution" width="500">
</div>

<br/>

## 우리의 핵심 기능이에요. ⭐

## 홈 화면
![홈화면시연](https://github.com/user-attachments/assets/07772b59-d18a-4b8b-9bdc-f9077b9c25a6)
- **착한 가게 노출**: 모금 마감기한 기준 **오름차순**으로 상위 **5개의 착한 가게**를 보여줍니다.
- **통계 정보 제공**: 온기를 전한 기업들과 **선순환 통계**를 함께 확인할 수 있습니다.

## 영수증 인증
![영수증인증시연](https://github.com/user-attachments/assets/d22349e0-ab04-42d6-8338-06c613ca0f48)
- **방문 인증**: **카메라**로 영수증을 촬영하여 방문 사실을 인증할 수 있습니다.

## 설정
![설정시연](https://github.com/user-attachments/assets/04dfd98e-559b-462f-b746-81a1eef01e6d)
- **계정 정보**: 가입한 **소셜 로그인 계정 정보**를 확인할 수 있습니다.
- **푸시 알림 설정**: 푸시 알림의 활성화 여부를 변경할 수 있습니다.
- **로그아웃**: 계정에서 로그아웃할 수 있는 옵션을 제공합니다.

## 온기 우편함
![온기우편함시연](https://github.com/user-attachments/assets/0362e55c-e437-4c37-b7c1-0a81f951e24c)
- **후원 소식 확인**: 유저가 후원한 **식당들의 최신 소식**을 확인할 수 있는 공간입니다.

## 나의 온기
![나의온기시연](https://github.com/user-attachments/assets/af40a042-825f-41c0-b592-4ff41d9911c0)
- **최근 후원 정보**: 유저가 최근 후원한 **최대 4개의 식당** 정보를 보여줍니다.
- **통계 제공**: 후원 활동에 대한 **간략한 통계 정보**를 제공합니다.

## 나의 식권
![나의식권시연](https://github.com/user-attachments/assets/701f01e8-ba8c-4311-9047-3e7fedaf163f)  ![식권인식시연](https://github.com/user-attachments/assets/a941ed9f-d8bb-4667-9687-aa4dfe7a4396)
- **보유 식권 관리**: 사용자가 보유한 **식권 목록**을 확인할 수 있습니다.
- **QR 코드 사용**: 식권 클릭 시 **QR 코드 모달**이 표시되며, QR 촬영 후 사장님이 코드를 입력할 수 있는 페이지로 이동합니다.
- **갤러리 저장**: 해당 식권을 **갤러리에 저장**할 수 있습니다.

<br/>

## 라이브러리 & 프레임워크 🔧
| 카테고리      |                                    스택                                     |
|:----------|:-------------------------------------------------------------------------:|
| Language  |                                   JAVA                                    |
| FrameWork |                                SpringBoot                                 |
| ORM       |                                    JPA                                    |
| Database  |                               MySQL, Redis                                |
| Library   | Lombok, Spring Security, SpringBoot Starter, JWT, Quartz, Firebase, ZXing |
| Deploy    |                           Docker, AWS(EC2, S3)                            |

<br/>

## 외부 API
Naver Cloud Platform - OCR
  `;

  const new_dummy_md = `
  <div>
  ## 우리의 비전 💡
&nbsp;온정은 지역 소상공인과 고객 간의 **선순환적인 관계**를 만들어가는 것을 목표로 합니다.  
이를 통해 더 많은 사람들이 선행에 동참하고, 지역 경제와 사회에 긍정적인 변화를 만들어갑니다.

- **지역 사회 강화**: 착한 가게를 지원함으로써 지역 경제를 활성화합니다.
- **투명성과 신뢰**: 모든 후원 활동과 사용 내역은 투명하게 관리됩니다.
- **확장성 있는 플랫폼**: 더 많은 지역과 소상공인이 참여할 수 있도록 지속적으로 확장해 나갑니다.
</div>
  `;

  // 라우팅
  const navigate = useNavigate();

  // 초기값
  const [requestMd, setRequestMd] = useState(request_dummy_md); // 원본 리드미 파일
  const [newMd, setNewMd] = useState(new_dummy_md); // 새 마크다운 파일
  const [finalMd, setFinalMd] = useState(request_dummy_md); // 최종 파일

  const [isLoading, setIsLoading] = useState(true); // 로딩 상태

  // 입장 시 바로 markdown 가져오기
  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setIsLoading(true); // 로딩 시작
        const data = await getOriginMarkdown();
        setRequestMd(data.origin_md);
        setNewMd(data.new_md);
      } catch {
        alert('readme를 불러오는데 실패했어요!');
      } finally {
        setIsLoading(false); // 로딩 완료
      }
    };

    fetchMarkdown();
  }, []);

  // FeedMe 깃허브에 올리기
  const handleSendGithub = async () => {
    try {
      await postFinalMarkdown(
        {
          final_md: finalMd
        }
      );

      navigate("/"); // 어디로 이동해야하지??
    } catch {
      alert("새로운 markdown으로 업데이트 하는 데 실패했어요 !");
    }
  };

  // 로딩 화면 표시
  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          <p className="text-primary mt-4">리드미를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center h-screen relative">
      {/* AppBar */}
      <AppBar
        theme="light"
        type="back"
        isProgress={false}
        onClickBackButton={() => navigate(-1)} // 이전 페이지로 이동
      />
  
      {/* 코드 순서 선택 컴포넌트 */}
      <div className="flex-grow-[1] w-full overflow-y-auto">
        <ContentManager origin={requestMd} new_md={newMd} setFinalMd={setFinalMd} />
      </div>
  
      {/* 화살표 추가 */}
      <div className="w-full flex justify-center items-center py-2">
        <div className="flex justify-center items-center bg-primary text-secondary text-sm w-6 h-6 rounded-full">
          ↓
        </div>
      </div>
  
      {/* 마크다운 프리뷰 */}
      <div 
      className='w-full flex bg-secondary text-primary py-2 items-center justify-center'
      style={{
        border: '0.5px solid #191919',
        borderRadius: '8px 8px 0px 0px', // 각 코너를 섬세하게 설정
      }}
      >
          미리보기
        </div>
      <div
        style={{
          border: '0.5px solid #191919',
          borderRadius: '0px 0px 8px 8px',
        }}
        className="w-full overflow-y-auto"
      >
        <div className='box-border p-2'>
        <MarkdownPreview markdown={finalMd} />
        </div>
      </div>
  
      {/* 화면 하단 고정 버튼 */}
      <button
        className="fixed w-10/12 bg-secondary text-primary text-md border-none py-3 px-4 rounded-lg scursor-pointer"
        style={{
          bottom: '50px',
          left: '50%', // 수평 중앙 정렬
          transform: 'translateX(-50%)', // 중앙 정렬 보정
        }}
        onClick={() => handleSendGithub()}
      >
        FeedMe 종합 평가 내 깃허브에 올리기
      </button>
    </div>
  );  
}

export default EditPage;