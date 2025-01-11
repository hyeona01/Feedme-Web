export type tagSummariesResponse = {
  tags: number[];
  positive_content: String;
  negative_content: String;
};

export type project = {
  id: number;
  title: string;
};

export type projectListResponse = {
  projects: project[];
};
