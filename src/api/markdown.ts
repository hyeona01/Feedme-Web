import { api } from '.';

// markdown 가져오기
export const getOriginMarkdown = async () => {
    const response = await api.get(
      `/markdown`,
    );
    return response.data;
  };
  
  // markdown 전송하기
  export const postFinalMarkdown = async ({
    final_md,
  }: {
    final_md: string;
  }) => {
    const response = await api.post(
      `/markdown`,
      final_md,
    );
    return response.data;
  };