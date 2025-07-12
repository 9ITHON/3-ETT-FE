// store/useArchiveStore.ts
import { create } from "zustand";

export type ArchiveItem = {
  id: string;
  title: string;
  content: string;
  date: string;
};

interface ArchiveState {
  archiveItems: ArchiveItem[];
  deleteByDate: (date: string) => void;
}

export const useArchiveStore = create<ArchiveState>((set) => ({
  archiveItems: [
    {
        id: "1",
        date: "2025년 6월 28일",
        title: "건강검진을 받을 수 있어요",
        content: "○○님은 올해 건강검진 대상자입니다. 병원이나 의원에 가서서 검진을 받으시려면 이렇게 저렇게 하세요.",
    },
    {
        id: "2",
        date: "2025년 6월 24일",
        title: "무더운 날씨, 이런거 지켜주세요!",
        content: "요즘 날씨가 매우 더워지고 있어요. 이럴 때는 몸이 아프거나 쓰리지기 쉬워요. 항상 더위 조심하고 조심하기.",
    },
    {
        id: "3",
        date: "2025년 6월 7일",
        title: "정부 지원금을 받을 수 있어요",
        content: "○○님은 이번 지원금 대상자입니다. 코로나 때문에 어려움을 겪으셨던 분들께 정부에서 지원을 할 예정입니다.",
    },
    {
        id: "4",
        date: "2025년 5월 15일",
        title: "주택청약 받으세요",
        content: "요즘 날씨가 매우 더워지고 있어요. 이럴 때는 몸이 아프거나 쓰리지기 쉬워요. 더위 조심하세요. 항상 조심.",
    },
    {
        id: "5",
        date: "2025년 4월 9일",
        title: "세금 납부하세요",
        content: "요즘 날씨가 매우 더워지고 있어요. 이럴 때는 몸이 아프거나 쓰리지기 쉬워요. 건강 주의하세요.",
    },
  ],
  deleteByDate: (date) =>
    set((state) => ({
      archiveItems: state.archiveItems.filter((item) => item.date !== date),
    })),
}));
