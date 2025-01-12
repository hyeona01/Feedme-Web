  // 받아온 origin readme와 추가할 md 파일
  export type GetTotalEvaluationResponse = {
    origin_md: string;
    new_md: string;
  }

  // 최종 readme file
  export type sendFinalMdRequest = {
    final_md: string;
  }