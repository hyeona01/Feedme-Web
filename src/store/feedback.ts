import { initialFeedbackData } from '@/contstants/feedback';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type FeedBackDataType = {
  positive_tag_ids: number[];
  positive_situation: string;
  positive_behavior: string;
  positive_impact: string;
  negative_tag_ids: number[];
  negative_situation: string;
  negative_behavior: string;
  negative_impact: string;
  nickname: string;
};

type FeedbackStore = {
  feedbackData: FeedBackDataType;
  updateFeedbackData: (feedbackData: FeedBackDataType) => void;
};

export const useFeedbackStore = create(
  persist<FeedbackStore>(
    (set) => ({
      feedbackData: initialFeedbackData,
      updateFeedbackData: (newFeedbackData) =>
        set(() => ({ feedbackData: newFeedbackData })),
    }),
    {
      name: 'feedbackStore',
    },
  ),
);
