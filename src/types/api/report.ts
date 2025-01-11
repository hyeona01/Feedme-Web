export type tag = {
  id: number;
  count: number;
};

export type reportTagsResponse = {
  total_count: number;
  tags: tag[];
};

export type reportResponse = {
  title: string;
  content: string;
};
