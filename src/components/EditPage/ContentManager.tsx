import React, { useState } from 'react';

type ContentManagerProps = {
    origin: string;
    new_md: string;
    setFinalMd: React.Dispatch<React.SetStateAction<string>>;
  };

const ContentManager = ({ origin, new_md, setFinalMd }: ContentManagerProps) => {

  const [selectedSection, setSelectedSection] = useState(0);

  // html <></> 혹은 </>인 경우, 하나의 문장으로 취급
  const isHtmlLike = (line) => /<[^>]+>/.test(line);

  // markdown 파일을 줄별로 분리하는 함수
  const parsedSections = origin
    .split('\n')
    .map((section) => {
      const lines = section.split('\n').filter((line) => line.trim() !== '');
      if (lines.some(isHtmlLike)) {
        // html인 경우, group으로 묶기
        return { type: 'html', content: section };
      } else {
        // 일반 string인 경우
        return { type: 'text', content: lines };
      }
    })
    .filter((section) => section.content.length > 0); // Exclude empty sections

    // 새로운 Markdown 업데이트
const handleUpdate = (index: number) => {
    // 선택된 섹션을 저장
    setSelectedSection(index);
  
    // 최상위에 추가하는 경우
    if (index === -1) {
      const updatedMd = `${new_md}\n\n` + parsedSections.map((section) => section.content).join('\n\n');
      setFinalMd(updatedMd);
      return;
    }
  
    // 특정 섹션 아래에 추가하는 경우
    const updatedSections = parsedSections.map((section, idx) => {
      if (idx === index) {
        return {
          ...section,
          content: `${section.content}\n\n${new_md}`, // 해당 섹션 아래에 추가
        };
      }
      return section;
    });
  
    // 업데이트된 Markdown 결합
    const updatedMd = updatedSections.map((section) => section.content).join('\n\n');
    setFinalMd(updatedMd);
  };

  return (
    <div className="w-full flex flex-col bg-secondary px-2 box-border">
    <div
      className={`px-2 py-2 cursor-pointer ${
        selectedSection === -1 ? 'bg-primary text-secondary' : 'text-gray-400'
      } hover:bg-gray-200 hover:text-secondary rounded`}
      onClick={() => handleUpdate(-1)}
    >
    </div>
    {selectedSection === -1 && (
          <div className="px-2 text-primary text-xs">
            <p>{new_md}</p>
          </div>
        )}

    {parsedSections.map((section, index) => (
      <div key={index}>
        <div
          className={`px-2 cursor-pointer ${
            selectedSection === index ? 'bg-primary text-secondary' : 'text-gray-400'
          } hover:bg-gray-200 hover:text-secondary rounded`}
          onClick={() => handleUpdate(index)} // 클릭 시 선택된 index 저장
        >
          <pre className="whitespace-pre-wrap">{section.content}</pre>
        </div>
        {selectedSection === index && (
          <div className="px-2 text-primary text-xs">
            <p>{new_md}</p>
          </div>
        )}
      </div>
    ))}
  </div>
  );
}

export default ContentManager;