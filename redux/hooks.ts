
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, AppState } from './store'



// В каждом компоненте обычно типизируется useSelector<AppState> и useDispatch<AppDispatch>.
// Этими двумя функциями мы сразу типизируем их тут. А внутри компонента просто вызываем.
// В случае useSelector мы в слайсе делаем функцию, которая берёт нужные нам части state и прокидываем в useSelector.
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

