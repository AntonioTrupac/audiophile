import { create } from "zustand";

type PopoverState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const usePopoverStore = create<PopoverState>((set) => ({
  isOpen: false,
  open: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));
