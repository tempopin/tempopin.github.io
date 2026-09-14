'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function HeaderControls({ children }: { children: ReactNode }) {
  const controlsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const pickers = Array.from(controls.querySelectorAll<HTMLDetailsElement>('details.header-picker'));
    const closeOthers = (current: HTMLDetailsElement) => {
      for (const picker of pickers) {
        if (picker !== current) picker.open = false;
      }
    };
    const closeAll = () => {
      for (const picker of pickers) picker.open = false;
    };
    const onToggle = (event: Event) => {
      const picker = event.currentTarget as HTMLDetailsElement;
      if (picker.open) closeOthers(picker);
    };
    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;

      const clickedPicker = pickers.find((picker) => picker.contains(target));
      if (!clickedPicker) {
        closeAll();
      } else if (target instanceof Element && target.closest('summary') === clickedPicker.querySelector('summary')) {
        closeOthers(clickedPicker);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      for (const picker of pickers) {
        if (picker.open) {
          picker.open = false;
          picker.querySelector('summary')?.focus();
        }
      }
    };

    for (const picker of pickers) picker.addEventListener('toggle', onToggle);
    document.addEventListener('click', onDocumentClick, true);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      for (const picker of pickers) picker.removeEventListener('toggle', onToggle);
      document.removeEventListener('click', onDocumentClick, true);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return <div className="header-controls" ref={controlsRef}>{children}</div>;
}
