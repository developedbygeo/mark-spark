import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'src/store/store';

type DispatchFn = () => AppDispatch;
export const useAppDispatch: DispatchFn = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
